import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  showSearchFilter = false;

  items: MenuItem[];

  constructor() { }
  ngOnInit(): void {
    this.items = [
    {label: 'Novel', icon: 'pi pi-fw pi-home'},
    {label: 'Audible', icon: 'pi pi-fw pi-calendar'},
    {label: 'Discuss', icon: 'pi pi-fw pi-pencil'},
];}

  handleFilterByClick(event){ this.showSearchFilter = !this.showSearchFilter; }
  handleSearchFilterChange(event) { console.log(event); }

}
