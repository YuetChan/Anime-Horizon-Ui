import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchApiService {

  genres = [{
      name : 'Action',
      code : 'ACTION',
      inactive : false
    },{
      name : 'Adventure',
      code : 'ADVENTURE',
      inactive : false
    },{
      name : 'Comedy',
      code : 'COMEDY',
      inactive : false
    },{
      name : 'Cyberpunk',
      code : 'CYBERPUNK',
      inactive : false
    },{
      name : 'Drama',
      code : 'DRAMA',
      inactive : false

    },{
      name : 'Ecchi',
      code : 'ECCHI',
      inactive : false
    },{
      name : 'Fantasy',
      code : 'FANTASY',
      inactive : false
    },{
      name : 'Harem',
      code : 'HAREM',
      inactive : false
    },{
      name : 'Historical',
      code : 'HISTORICAL',
      inactive : false
    },{
      name : 'Horror',
      code : 'HORROR',
      inactive : false
    },{
      name : 'Isekai',
      code : 'ISEKAI',
      inactive : false
    },{
      name : 'Mystery',
      code : 'MYSTERY',
      inactive : false
    },{
      name : 'Psychological',
      code : 'PSYCHOLOGICAL',
      inactive : false
    }, {
      name : 'Romance ',
      code : 'ROMANCE',
      inactive : false
    },{
      name : 'School Life',
      code : 'SCHOOL_LIFE',
      inactive : false
    },{
      name : 'Sci Fi',
      code : 'SCI_FI',
      inactive : false
    },{
      name : 'Sport',
      code : 'SPORT',
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
    inactive : false,
    default : false
  },
  ];

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


    console.log(validTypes);
    return validTypes.length ? validTypes : null;
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
