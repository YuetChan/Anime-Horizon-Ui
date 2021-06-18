import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchApiService {

  type = [{
    name : 'Article',
    code : 'ARTICLE',
    inactive : false,
    default : true,
    class : 'pi pi-pencil'
  }];

  markets = [{
    name : 'Commodities',
    code : 'COMMODITIES',
    inactive : false,
    default : true,
  },{
    name : 'Stocks',
    code : 'STOCKS',
    inactive : false,
    default : true,
  },{
    name : 'Cryptocurrencies',
    code : 'CRYPTOS',
    inactive : false,
    default : true,
  }]

  sectors = [{
    name : 'Consumer Discretionary',
    code : 'CONSUMER_DISCRETIONARY',
    inactive : false,
    default : true,
  },{
    name : 'Consumer Staples',
    code : 'CONSUMER_STAPLES',
    inactive : false,
    default : true,
  },{
    name : 'Energy',
    code : 'ENERGY',
    inactive : false,
    default : true,
  },{
    name : 'Financials',
    code : 'FINANCIALS',
    inactive : false,
    default : true,
  },{
    name : 'Health Care',
    code : 'HEALTH_CARE',
    inactive : false,
    default : true,
  },{
    name : 'Industrials',
    code : 'INDUSTRIALS',
    inactive : false,
    default : true,
  },{
    name : 'Information Technology',
    code : 'INFORMATION_TECHNOLOGY',
    inactive : false,
    default : true,
  },{
    name : 'Materials',
    code : 'MATERIAL',
    inactive : false,
    default : true,
  },{
    name : 'Real Estate',
    code : 'REAL_ESTATE',
    inactive : false,
    default : true,
  },{
    name : 'Telecommunication Services',
    code : 'TELE_SERVICES',
    inactive : false,
    default : true,
  },{
    name : 'Utilities',
    code : 'UTILITIES',
    inactive : false,
    default : true,
  }]

  analysis = [{
    name : 'Technical Analysis',
    code : 'TA',
    inactive : false,
    default : true,
  },{
    name : 'Fundamental Analysis',
    code : 'FA',
    inactive : false,
    default : true,
  },{
    name : 'Macro Analysis',
    code : 'MA',
    inactive : false,
    default : true,
  }]

  opinions = [{
    name : 'Bull',
    code : 'BULL',
    inactive : false,
    default : true,
  },{
    name : 'Bear',
    code : 'BEAR',
    inactive : false,
    default : true,
  },{
    name : 'Neutral',
    code : 'NEUTRAL',
    inactive : false,
    default : true,
  }]

  sortedBys = [
    {
      name : 'Latest',
      code : 'latest',
      inactive : false
    }, {
      name :  'Popular',
      code : 'popular',
      inactive : false
    }
  ];

  searchSource = new BehaviorSubject(SearchSourceEnums.INIT);


  constructor() { }


  getSearchSource(){ return this.searchSource; }

  onPaginatorSearch(){ this.searchSource.next(SearchSourceEnums.PAGINATOR); }
  onFilterSearch(){ this.searchSource.next(SearchSourceEnums.FILTER); }


  getValidTypes() {return this.type; }
  getValidSectors(){ return this.sectors; }
  getValidMarkets(){ return this.markets; }
  getValidAnalysis(){ return this.analysis; }
  getValidOpinions(){ return this.opinions; }

  getValidSortedBys(){ return this.sortedBys; }


  findFirstItem(items){ return items ? (Array.isArray(items) ? items[0] : items) : items; }
  findFirstValidNumber(items : number) {
    if(items){
      if(Array.isArray(items)){
        for(let item of items){
          if(!isNaN(item)){
            let num = Number.parseInt(item.toString());
            return Number.isInteger(num) ? num : 0;
          }
        }
      }else{
        if(!isNaN(items)){
          let num = Number.parseInt(items.toString());
          return Number.isInteger(num) ? num : 0;
        }
      }
    }

    return 0;
  }
  findFirstValidNullableBoolean(items){
    if(items){
      if(Array.isArray(items)){
        for(let item of items){
          if(item === true || item === false)
            return item;
        }
      }else
        return (items === true || items === false) ? items : null;

    }

    return null;
  }

  findValidTypes(items){
    console.log(items)
    let validTypes = [];
    for(let item of items){
      for(let type of this.getValidTypes().filter(type => !type.inactive).map(type => type.code))
        if(item === type)
          validTypes.push(type);
    }

    return validTypes.length ? validTypes : null;
  }

  // findValidGenres(items){
  //   let validGenres = [];
  //   for(let item of items){
  //     for(let genre of this.getValidGenres().filter(genre => !genre.inactive).map(genre => genre.code))
  //       if(item === genre)
  //         validGenres.push(genre);
  //   }

  //   return validGenres.length ? validGenres : null;
  // }

  findFirstValidSortedBy(sortedBys){
    if(sortedBys) {
      let validSortedBys = this.getValidSortedBys().filter(type => !type.inactive).map(type => type.code);
      if(Array.isArray(sortedBys)){
        for(let sortedBy of sortedBys){
          if(validSortedBys.includes(sortedBy))
            return sortedBy;
        }
      }else{
        let sortedBy = sortedBys;
        if(validSortedBys.includes(sortedBy))
          return sortedBy;
      }
    }
    return sortedBys;
  }


}

export enum SearchSourceEnums {
  INIT, PAGINATOR, FILTER
}
