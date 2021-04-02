import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { SearchApiService } from 'src/app/shared/services/search-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() searchResultChanged : EventEmitter<{sortedBy?: string, genres?: string[], type?: string}> = new EventEmitter();
  @Output() filterByClick: EventEmitter<boolean> = new EventEmitter();

  showSearchFilter = false;

  tabsConfig = [];
  tabResult = null;


  constructor(private route: ActivatedRoute,
              private searchApiService : SearchApiService) { }
  ngOnInit(): void {
    this.initDefaultTabsConfigAndResult();

    this.route.queryParams.subscribe(params => {
      let typeWithDuplicates = [
        ...params['type'] ? (Array.isArray(params['type']) ? params['type'] : [params['type']]) : [],
        ...[]
      ];
      this.setFirstTabHighlighted(typeWithDuplicates);

    })
  }


  initDefaultTabsConfigAndResult(){
    this.searchApiService.getValidTypes().forEach(type => {
      this.tabsConfig.push({
        name : type.name,
        code : type.code,
        hightlighted : type.default
      })
      if(type.default)
        this.tabResult = type.code;

    })
  }


  handleFilterByClick(){
    this.showSearchFilter = !this.showSearchFilter;
    this.filterByClick.emit(this.showSearchFilter);
  }
  handleTabClick(event) {
    this.tabsConfig.forEach(tabConfig =>  {
      if(tabConfig.code === event)
        this.tabResult = tabConfig.code;

    });
    this.searchResultChanged.emit({
      type: this.tabResult
    });
  }
  handleSearchFilterChange(event) {
    this.searchResultChanged.emit({
      sortedBy: event.sortedBy,
      genres: event.genres
    });
  }

  setFirstTabHighlighted(items){
    let typeWithoutDuplicates = items.filter((n, i) => items.indexOf(n) === i);
    for(let typeWithoutDuplicate of typeWithoutDuplicates){
      for(let tabConfig of this.tabsConfig){
        if(typeWithoutDuplicate === tabConfig.code){
          this.tabResult = tabConfig.code;
          return ;
        }
      }
    }
  }

}
