import { createMachine, interpret, assign, Machine } from 'xstate';
import { Observable, of } from 'rxjs';
import { delay, retry, retryWhen, tap} from 'rxjs/operators'

export class LoadingStateMachine {

  stateMachine = Machine({
    id: 'thread state machine',
    initial: 'idle',
    states: {
      idle: {
        on: {
          FETCH: 'fetching'
        }
      },
      fetching: {
        on: {
          RETRY: 'retry',
          DONE: 'done'
        }
      },
      retry:{
        on: {
          FETCH: 'fetching',
          DONE: 'done'
        }
      },
      done: {
        type: 'final'
      },
    }
  });

  currentState = this.stateMachine.initialState;
  context : LoadingContext = {
    fetchInterface : of(),
    maxRefetchCount : 3
  };
  data : any[] = [];


  reset(){
    this.currentState = this.stateMachine.initialState;
    this.context = {
      fetchInterface : of(),
      maxRefetchCount : 3
    };
  }

  fetch(){
    let counter = 0;

    this.currentState = this.stateMachine.transition(this.currentState, 'FETCH');
    if(this.currentState.value === 'fetching'){
      return (this.context.fetchInterface.pipe(tap(data => {
        this.currentState = this.stateMachine.transition(this.currentState, 'DONE');
      }), retryWhen(err => err.pipe(delay(1000), tap(err => {
        if(this.currentState.value === 'done')
          throw err;

        this.currentState = counter < this.context.maxRefetchCount
        ? this.stateMachine.transition(this.currentState, 'RETRY') : this.stateMachine.transition(this.currentState, 'DONE');

        counter ++;
      })))))
    }
  }
  cancel(){ this.currentState = this.stateMachine.transition(this.currentState, 'DONE'); }

  isDone() { return this.currentState.done; }
  getState() { return this.currentState.value; }

}

export interface LoadingContext {
  fetchInterface?: Observable<any>;
  maxRefetchCount? : number;
}



