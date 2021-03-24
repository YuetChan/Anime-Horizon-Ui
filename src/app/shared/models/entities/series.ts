import { SeriesGenre } from "./series-genre";

export interface Series {
  seriesId : number;
  name : string;
  genres? : SeriesGenre[];
}
