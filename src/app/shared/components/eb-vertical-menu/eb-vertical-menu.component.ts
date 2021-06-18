import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-eb-vertical-menu',
  templateUrl: './eb-vertical-menu.component.html',
  styleUrls: ['./eb-vertical-menu.component.css']
})
export class EbVerticalMenuComponent implements OnInit, AfterViewInit {
  // current implemnetation only support up to 9 menu items

  @ViewChild('menu') menu: any;

  @Input() set items(items: {label: string, icon: string, isActive?: boolean, command: any}[]){
    items.forEach(item => {
      if(item.isActive)
        this.activeItem = item;

      this._items.push({
        label: item.label,
        icon: item.icon,
        command: item.command
      })
    })
  }
  _items : MenuItem[] = []
  activeItem: {label: string, icon: string, HTMLId?: string};

  @Output() itemClick = new EventEmitter();

  constructor() { }
  ngOnInit(): void {
    this.itemClick.emit(this.activeItem);
  }
  ngAfterViewInit(): void {
    let menuHTMLItems = this.menu.containerViewChild.nativeElement.firstChild.children;
    for(let i = 0; i < menuHTMLItems.length; i++){
      let node = menuHTMLItems[i].childNodes[0];
      node.id = i + '_uuid-menu-item';

      if(menuHTMLItems[i].innerText === this.activeItem.label){
        this.activeItem.HTMLId = node.id;
        node.classList.add('active');
      }
    }
  }

  handleItemClick(event){
    let path = event.path
    if(path[0].id.split('_', 2).length === 2){
      if(path[0].id === this.activeItem.HTMLId){
        this.itemClick.emit(this.activeItem);
        return;
      }

      path[0].classList.add('active');
      document.getElementById(this.activeItem.HTMLId).classList.remove('active');
      let activeItem = this._items.filter(item => item.label === path[0].innerText)[0]
      this.activeItem = {
        label: activeItem.label,
        icon: activeItem.icon
      };
      this.activeItem.HTMLId = path[0].id;
    }else if(path[1].id.split('_', 2).length === 2){
      if(path[1].id === this.activeItem.HTMLId){
        this.itemClick.emit(this.activeItem);
        return;
      }

      path[1].classList.add('active');
      document.getElementById(this.activeItem.HTMLId).classList.remove('active');
      let activeItem = this._items.filter(item => item.label === path[1].innerText)[0]
      this.activeItem = {
        label: activeItem.label,
        icon: activeItem.icon
      };
      this.activeItem.HTMLId = path[1].id;
    }else
      return;

    this.itemClick.emit(this.activeItem);
  }

}
