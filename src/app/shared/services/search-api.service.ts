import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchApiService {

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
  type = [{
    name : 'Novel',
    code : 'novel',
    inactive : false,
    default : true
  },{
    name : 'Audible',
    code : 'audible',
    inactive : false,
    default : false
  },{
    name : 'Discuss',
    code : 'discuss',
    inactive : false,
    default : false
  }];

  sortedBy = [
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


  constructor() { }


  getValidTypes() {return this.type; }
  getValidGenres(){ return this.genres; }

  getValidSortedBy(){ return this.sortedBy; }


  findFirstSeries(series){ return series ? Array.isArray(series) ? series[0] : series : series; }
  findFirstValidType(types){
    if(types) {
      let validTypes =this.getValidTypes().filter(type => !type.inactive).map(type => type.code);
      if(Array.isArray(types)){
        for(let type of types){
          if(validTypes.includes(type))
            return type;
        }
      }else{
        let type = types;
        if(validTypes.includes(type))
          return type;
      }
    }
    return types;
  }
  findValidGenres(items){
    let validGenres = [];
    for(let item of items){
      for(let genre of this.getValidGenres().filter(genre => !genre.inactive).map(genre => genre.code))
        if(item === genre)
          validGenres.push(genre);
    }

    return validGenres;
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
