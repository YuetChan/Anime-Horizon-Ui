import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchApiService } from 'src/app/shared/services/search-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() filterByClick: EventEmitter<Object> = new EventEmitter();

  tabsConfig = [];
  tabResult = null;

  constructor(private route: ActivatedRoute,
              private searchApiService : SearchApiService) { }
  ngOnInit(): void { }

  handleFilterByClick(event){
    this.filterByClick.emit(null);
  }

}
