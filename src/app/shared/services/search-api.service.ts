import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchApiService {

  genres = [
    {
      name : 'Fantasy',
      code : 'FANTASY',
      inactive : false
    },{
      name : 'Comedy',
      code : 'COMEDY',
      inactive : false
    },{
      name : 'Adventure',
      code : 'ADVENTURE',
      inactive : false
    },{
      name : 'Romance ',
      code : 'ROMANCE',
      inactive : false
    },{
      name : 'Non Human ',
      code : 'NON_HUMAN',
      inactive : false
    },{
      name : 'Isekai',
      code : 'ISEKAI',
      inactive : false
    },{
      name : 'Action',
      code : 'ACTION',
      inactive : false
    },{
      name : 'School Life',
      code : 'SCHOOL_LIFE',
      inactive : false
    }
  ]
  type = [{
    name : 'Novel',
    code : 'NOVEL',
    inactive : false,
    default : true,
    class : 'pi pi-pencil'
  },{
    name : 'Audible',
    code : 'AUDIBLE',
    inactive : false,
    default : false,
    class : 'pi pi-volume-up'
  },{
    name : 'Discuss',
    code : 'DISCUSS',
    inactive : true,
    default : false
  }];

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
  getValidGenres(){ return this.genres; }

  getValidSortedBy(){ return this.sortedBys; }


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

  findFirstValidType(types){
    if(types) {
      let validTypes = this.getValidTypes().filter(type => !type.inactive).map(type => type.code);
      if(Array.isArray(types)){
        for(let type of types){
          if(validTypes.includes(type)){
            console.log(validTypes);
            return type;
          }
        }
      }else{
        let type = types;
        if(validTypes.includes(type)){
          console.log(type);
          return type;
        }
      }
    }


    return null;
  }
  findValidGenres(items){
    let validGenres = [];
    for(let item of items){
      for(let genre of this.getValidGenres().filter(genre => !genre.inactive).map(genre => genre.code))
        if(item === genre)
          validGenres.push(genre);
    }

    return validGenres.length ? validGenres : null;
  }

  findFirstValidSortedBy(sortedBys){
    if(sortedBys) {
      let validSortedBys = this.getValidSortedBy().filter(type => !type.inactive).map(type => type.code);
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
