import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-eb-vertical-menu',
  templateUrl: './eb-vertical-menu.component.html',
  styleUrls: ['./eb-vertical-menu.component.css']
})
export class EbVerticalMenuComponent implements OnInit, AfterViewInit {
  // current implemnetation only support up to 9 menu items

  @Input() items : MenuItem[] = [];
  @Output() itemClick = new EventEmitter();

  constructor() { }
  ngOnInit(): void { }
  ngAfterViewInit(): void {
    let menuitem = document.getElementsByClassName("p-menuitem-link");
    for (let i = 0; i < menuitem.length; i++){
      if(i === 0)
        menuitem[0].classList.add("active");

      menuitem[i].id = i + "-menu-item";
    }

  }

  handleItemClick(event){
    let menuitem = document.getElementsByClassName("p-menuitem-link");
    for (let i = 0; i < menuitem.length; i++) {
      menuitem[i].classList.remove("active");
    }

    let item = event.srcElement.id === "" ? document.getElementById(event.srcElement.parentElement.id)
    : document.getElementById(event.srcElement.id);

    item.classList.add("active");

    this.itemClick.emit(this.items[item.id[0]].label);
  }


}
