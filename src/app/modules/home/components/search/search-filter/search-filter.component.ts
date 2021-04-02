import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchApiService } from 'src/app/shared/services/search-api.service';
@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {

  @Output() searchFilterResultChanged : EventEmitter<{sortedBy : string, genres: string[]}> = new EventEmitter();

  searchFilterResult = {
    sortedBy : null,
    genres : []
  }
  searchFilterConfig = {
    sortedBys : [],
    genres : []
  }

  constructor(private route: ActivatedRoute,
              private searchApiService: SearchApiService) { }
  ngOnInit(): void {
    this.initDefaultSearchFilterConfigAndResult()

    this.route.queryParams.subscribe(params => {
      let genresWithDuplicates = [
        ...this.searchFilterResult.genres,
        ...(params['genres'] ? (Array.isArray(params['genres']) ? params['genres'] : [params['genres']]) : [])];

      let genresWithoutDuplicates = genresWithDuplicates.filter((n, i) => genresWithDuplicates.indexOf(n) === i);
      this.searchFilterResult.genres = this.searchApiService.findValidGenres(genresWithoutDuplicates);


      let sortedByWithDuplicates = [
        ...(params['sortedBy'] ? (Array.isArray(params['sortedBy']) ? params['sortedBy'] : [params['sortedBy']]) : []),
        ...[this.searchFilterResult.sortedBy]
      ];

      let sortedByWithoutDuplicates = sortedByWithDuplicates.filter((n, i) => sortedByWithDuplicates.indexOf(n) === i);
      let firstSortedBy = this.searchApiService.findFirstValidSortedBy(sortedByWithoutDuplicates);
      if(firstSortedBy)
        this.searchFilterResult.sortedBy = firstSortedBy;

    })

  }

  initDefaultSearchFilterConfigAndResult(){
    this.searchFilterResult = {
      sortedBy : this.searchApiService.getValidSortedBy()[0].code,
      genres : []
    }

    this.searchFilterConfig = {
      sortedBys : this.searchApiService.getValidSortedBy(),
      genres : this.searchApiService.getValidGenres()
    }
  }


  handleCheckboxCheck() { this.searchFilterResultChanged.emit(this.searchFilterResult); }
  handleRadioClick(){ this.searchFilterResultChanged.emit(this.searchFilterResult); }

}
