import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const searchBarEvent = new BehaviorSubject(123);

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  constructor() { }

  onBlur()

}
