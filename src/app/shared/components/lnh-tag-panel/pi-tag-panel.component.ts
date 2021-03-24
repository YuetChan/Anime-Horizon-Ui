import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pi-tag-panel',
  templateUrl: './pi-tag-panel.component.html',
  styleUrls: ['./pi-tag-panel.component.css']
})
export class PiTagPanelComponent implements OnInit {

  @Input() removable : boolean = false;
  @Input() tags: [] = [];

  @Output() onRemove : EventEmitter<string> = new EventEmitter();

  constructor() { }
  ngOnInit(): void { }

  remove(tag) { this.onRemove.emit(tag); }

}
