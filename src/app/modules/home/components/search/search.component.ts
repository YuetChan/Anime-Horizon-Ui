import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  showSearchFilter = false;

  constructor() { }
  ngOnInit(): void {}

  handleFilterByClick(event){ this.showSearchFilter = !this.showSearchFilter; }
  handleSearchFilterChange(event) { console.log(event); }

}
