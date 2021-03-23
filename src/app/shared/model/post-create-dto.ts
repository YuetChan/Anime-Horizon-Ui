export interface PostCreateDto {

  series : { seriesId : number, name : string },
  title : string,
  contents : string[],

  type : string,

  lnhUser : { userId : number, useremail : string }

}
