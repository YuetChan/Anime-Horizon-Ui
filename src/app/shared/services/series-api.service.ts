import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaderTemplateService } from './http-header-template.service';
import { QuerySeriesDto } from '../models/dtos/query-series-dto';

@Injectable({
  providedIn: 'root'
})
export class SeriesApiService {

  domainURL = "http://localhost:8080/";
  seriesURL = "series"

  constructor(
    private httpClient: HttpClient,
    private httpHeaderTemplate : HttpHeaderTemplateService) { }

  querySeriesByPrefix(series : string): Observable<QuerySeriesDto[]> {
    return this.httpClient.get<QuerySeriesDto[]>(this.domainURL + this.seriesURL, {
      headers : this.httpHeaderTemplate.getHeadersForJsonRes(),
      params : new HttpParams().append('prefix', series)})
  }

}
