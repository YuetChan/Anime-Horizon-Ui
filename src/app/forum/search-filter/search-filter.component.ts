import {Component, OnInit, ViewChild} from '@angular/core';
import {OverlayPanel} from 'primeng/overlaypanel';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {

  @ViewChild('overlay_panel', {static : true}) overlayPanelRef : OverlayPanel;

  selectedSortBy = 'latest';

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
  selectedGenres = [];


  constructor() { }
  ngOnInit(): void {}

  showFilterPanel(event){ this.overlayPanelRef.show(event); }

}
