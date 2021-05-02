import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [
    {label: 'Bookmarks', icon: 'pi pi-tags'},
    {label: 'Content', icon: 'pi pi-folder'}
  ];

  constructor() { }
  ngOnInit(): void { }



}
