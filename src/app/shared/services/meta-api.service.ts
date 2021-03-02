import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MetaApiService {

  domainUrl = "http://localhost:8080/";

  tagsUrl = "tags";
  creatorsUrl = "creators"
  postUrl = "posts";

  constructor(private httpClient: HttpClient) { }

  getTagsByName(name : string) : Observable<any> {
    let params = new HttpParams().append('name', name);
    return this.httpClient.get(this.domainUrl + this.tagsUrl, {params : params});
  }
  getCreatorsByName(name : string) : Observable<any> {
    let params = new HttpParams().append('name', name);
    return this.httpClient.get(this.domainUrl + this.creatorsUrl, {params : params});
  }

  getPostsByTagsAndCreators(tags : string[], creators : string[], pageable? : Pageable) : Observable<any> {
    let params = new HttpParams();

    tags.forEach(tag => params = params.append('tags', tag));
    creators.forEach(creator => params = params.append('creators', creator));

    params = params.append('pageNum', pageable.pageNum.toString()).append('pageSize', pageable.pageSize.toString());

    console.log(params);

    return this.httpClient.get(this.domainUrl + this.postUrl, {params : params})
  }

}

export interface Pageable {
  pageNum : number;
  pageSize :number;
}
