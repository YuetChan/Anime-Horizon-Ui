import {Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef} from '@angular/core';

import {SelectItem} from 'primeng/api';
import {MetaApiService} from '../../shared/services/meta-api.service';
import {CachedCreatorsAndTags} from '../model/overview';
import {AutoComplete} from 'primeng/autocomplete';
import {SearchFilterComponent} from '../search-filter/search-filter.component';

@Component({
  selector: 'app-search-option',
  templateUrl: './search-option.component.html',
  styleUrls: ['./search-option.component.css']
})
export class SearchOptionComponent implements OnInit {

  @ViewChild('search_filter', {static : true}) searchFilterRef : SearchFilterComponent;

  orderByDate: SelectItem;
  orderByDateOptions = [
    {label: 'Latest', value: 'latest'},
    {label: 'Oldest', value: 'oldest'}
  ]

  creatorSearchLabel = 'Title'
  creators = [];
  selectedCreator = '';
  @Input() cachedCreators : string[] = [];
  @Output() onCachedCreatorsChange : EventEmitter<CachedCreatorsAndTags> = new EventEmitter();

  @ViewChild('autoCompleteCreators', {static : false}) autoCompleteCreatorsRef : AutoComplete;

  constructor(private metaAPIService : MetaApiService) { }
  ngOnInit(): void {
    this.searchCreatorsByName('');
  }

  searchCreatorsByName(name) { this.getCreatorsByName(name).subscribe(datas => { this.creators = datas.creators.map(creator => creator.name); }); }

  getCreatorsByName(name) { return this.metaAPIService.getCreatorsByName(name); }

  onAutoCompleteCreatorsSelect(value){
    this.autoCompleteCreatorsRef.writeValue('');
    this.cacheCreator(value);
  }


  onAutoCompleteCreatorsKeyUp(code, value){
    if(this.isKeyUpEnter(code)){
      this.cacheCreator(value);
      this.creators = [];
    }

    if(this.isKeyUpArrowDown(code) && value === '')
      this.searchCreatorsByName(value);

  }

  isKeyUpEnter(code){ return code === 'Enter'; }
  isKeyUpArrowDown(code) { return code === 'ArrowDown'}

  cacheCreator(value) {
    if(this.cachedCreators.indexOf(value) < 0 && this.creators.indexOf(value) > -1)
      this.cachedCreators.push(value);


    this.selectedCreator = '';
    this.onCachedCreatorsChange.emit()
  }

  removeCachedCreator(creator){
    this.cachedCreators.splice(this.cachedCreators.indexOf(creator), 1);
    this.onCachedCreatorsChange.emit(this.getCachedCreatorsAndTags());
  }

  getCachedCreatorsAndTags(){ return { cachedCreators : this.cachedCreators } }

  handleFilterByClick(event){ this.searchFilterRef.showFilterPanel(event); }

}
