import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  domainURL = "http://localhost:8080/";
  seriesURL = "series"

  constructor(private httpClient: HttpClient) { }

  querySeriesByName(series : string) : Observable<any> {
    let params = new HttpParams().append('series', series);
    this.httpClient.get(this.domainURL + this.seriesURL, {params : params})
  }

}
