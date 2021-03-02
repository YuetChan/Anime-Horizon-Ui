import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pi-chip',
  templateUrl: './pi-chip.component.html',
  styleUrls: ['./pi-chip.component.css']
})
export class PiChipComponent implements OnInit {

  @Input() label: string = '';
  @Input() removable: boolean = false;

  @Output() onRemove : EventEmitter<string> = new EventEmitter<any>();

  constructor() { }
  ngOnInit(): void {}

  remove(){ this.onRemove.emit(this.label); }

}
