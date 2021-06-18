import { LnhUser } from 'src/app/shared/models/entities/lnh-user';

export interface PostCreateDto {
  series : { seriesId : number, name : string },
  title : string,
  contents : string[],

  type : string,
  lnhUser : LnhUser
}
