import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchApiService } from 'src/app/shared/services/search-api.service';
@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {

  @Output() searchFilterResultChanged : EventEmitter<{type: string[],
    // genres: string[],
    sortedBy : string }> = new EventEmitter();

  searchFilterResult = {
    type: [],
    sortedBy : null,
    // genres : []
  }
  searchFilterConfig = {
    types: [],
    sortedBys : [],
    // genres : []
  }

  constructor(private route: ActivatedRoute,
              private searchApiService: SearchApiService) { }
  ngOnInit(): void {
    this.initDefaultSearchFilterConfigAndResult()

    this.route.queryParams.subscribe(params => {
      let typeWithDuplicates = [
        ...[],
        ...(params['type'] ? (Array.isArray(params['type']) ? params['type'] : [params['type']]) : [])];

      let typeWithoutDuplicates = typeWithDuplicates.filter((n, i) => typeWithDuplicates.indexOf(n) === i);
      this.searchFilterResult.type = this.searchApiService.findValidTypes(typeWithoutDuplicates);


      let genresWithDuplicates = [
        ...[],
        ...(params['genres'] ? (Array.isArray(params['genres']) ? params['genres'] : [params['genres']]) : [])];

      let genresWithoutDuplicates = genresWithDuplicates.filter((n, i) => genresWithDuplicates.indexOf(n) === i);
      // this.searchFilterResult.genres = this.searchApiService.findValidGenres(genresWithoutDuplicates);


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
    this.searchFilterConfig = {
      types: this.searchApiService.getValidTypes(),
      sortedBys : this.searchApiService.getValidSortedBys(),
      // genres : this.searchApiService.getValidGenres()
    }

    this.searchFilterResult = {
      type: [],
      sortedBy : this.searchFilterConfig.sortedBys[0].code,
      // genres : []
    }
  }

  handleSearchFilterChange() { this.searchFilterResultChanged.emit(this.searchFilterResult); }

}
