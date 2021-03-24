import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {

  @Output() searchFilterResultChanged : EventEmitter<{sortedBy : string, genres: string[]}> = new EventEmitter();

  genres = [
    {
      name : 'Fantasy',
      code : 'fantasy',
      inactive : false
    },{
      name : 'Comedy',
      code : 'comedy',
      inactive : false
    },{
      name : 'Adventure',
      code : 'adventure',
      inactive : false
    },{
      name : 'Romance ',
      code : 'romance',
      inactive : false
    },{
      name : 'Non Human ',
      code : 'non_human',
      inactive : false
    },{
      name : 'Isekai',
      code : 'isekai',
      inactive : false
    },{
      name : 'Action',
      code : 'action',
      inactive : false
    },{
      name : 'School Life',
      code : 'school_life',
      inactive : false
    }
  ]

  sortedBy = [
    {
      name : 'Latest',
      code : 'latest',
      inactive : false
    }, {
      name :  'Popular',
      code : 'popular',
      inactive : false
    }
  ]

  searchFilterResult = {
    sortedBy : this.sortedBy[0].code,
    genres : []
  }

  constructor() { }
  ngOnInit(): void {}

  handleCheckboxCheck() { this.searchFilterResultChanged.emit(this.searchFilterResult); }
  handleRadioClick(){ this.searchFilterResultChanged.emit(this.searchFilterResult); }

}
