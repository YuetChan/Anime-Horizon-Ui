import {Component, OnInit, ViewChild} from '@angular/core';
import {OverlayPanel} from 'primeng/overlaypanel';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {

  @ViewChild('overlay_panel', {static : true}) overlayPanelRef : OverlayPanel;

  constructor() { }
  ngOnInit(): void {}

  showFilterPanel(event){ this.overlayPanelRef.show(event); }

}
