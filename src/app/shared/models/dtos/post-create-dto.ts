import { LnhUser } from '../../models/lnh-user';

export interface PostCreateDto {
  series : { seriesId : number, name : string },
  title : string,
  contents : string[],

  type : string,
  lnhUser : LnhUser
}
