import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-eb-tab-menu',
  templateUrl: './eb-tab-menu.component.html',
  styleUrls: ['./eb-tab-menu.component.css']
})
export class EbTabMenuComponent implements OnInit {

  @Input() items: {label : string, icon : string}[] = [];
  @Input() activeItem : {label : string, icon : string} = {label: '', icon: ''};

  constructor() { }
  ngOnInit(): void { }

}
