import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-eb-tab-menu',
  templateUrl: './eb-tab-menu.component.html',
  styleUrls: ['./eb-tab-menu.component.css']
})
export class EbTabMenuComponent implements OnInit {

  @Input() set items(items: {label: string, icon: string, isActive: boolean}[]){
    this._items = items;
    this.activeItem = items.filter(item => item.isActive)[0];
  }
  _items: {label: string, icon: string}[] = [];

  activeItem: {label : string, icon : string} = {label: '', icon: ''};
  @Output() onActiveItemChange: EventEmitter<{label: string, icon: string}> = new EventEmitter();

  constructor() { }
  ngOnInit(): void { }


}
