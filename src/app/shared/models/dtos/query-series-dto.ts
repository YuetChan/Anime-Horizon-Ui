import { SeriesGenre } from 'src/app/shared/models/entities/series-genre';

export interface QuerySeriesDto {
  seriesId : number
  name : string,
  genres: SeriesGenre
}
