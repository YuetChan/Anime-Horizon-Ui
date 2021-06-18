import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  menuItems = [
    {
      label: 'Bookmarks',
      icon: 'pi pi-tags',
      isActive: true,
      command : (event) => this.activeMenuItem = event.item
    },{
      label: 'Studio',
      icon: 'pi pi-folder',
      command : (event) => this.activeMenuItem = event.item
    }
  ];

  activeMenuItem = {
    label: '',
    icon: ''
  };

  constructor() { }
  ngOnInit(): void { }

  handleMenuItemClick(event){
    console.log(event);
    this.activeMenuItem = {
      label: event.label,
      icon: event.icon
    }
  }

}
