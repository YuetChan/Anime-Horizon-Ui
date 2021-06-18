import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Pageable } from '../models/others/pageable';
import { PostCreateDto } from '../models/dtos/post-create-dto';
import { PostEditDto } from '../models/dtos/post-edit-dto';
import { HttpHeaderTemplateService } from '../services/http-header-template.service';

@Injectable({
  providedIn: 'root'
})
export class ThreadApiService {

  domainURL = 'http://localhost:8080/';
  postURL = 'threads';

  constructor(
    private httpClient: HttpClient,
    private httpHeaderTemplate : HttpHeaderTemplateService) { }

  fetchThreadsByFilter(filterConfig : {
    series? : string,
    lnhUser? : string, type? : string[],
    allowAudible? : boolean, genres? : string[],
    pageable? : Pageable
  }) : Observable<any> {
    let params = new HttpParams();
    params = filterConfig.series ? params.append('series', filterConfig.series) : params;
    params = filterConfig.lnhUser ? params.append('lnhUser', filterConfig.lnhUser) : params;
    filterConfig.type?.forEach(type => params = params.append('type', type))
    params = filterConfig.allowAudible ? params.append('allowAudible', filterConfig.allowAudible.toString()) : params;
    filterConfig.genres?.forEach(genre => params = params.append('genres', genre));
    params = filterConfig.pageable ? params.append('pageNum', filterConfig.pageable.pageNum.toString()).append('pageSize', filterConfig.pageable.pageSize.toString()) : params;


    console.log(params);
    return this.httpClient.get(this.domainURL + this.postURL, {
      headers : this.httpHeaderTemplate.getHeadersForJsonRes(),
      params : params
    })
  }

  createThread(postCreateDto : PostCreateDto){
    return this.httpClient.post(this.domainURL + this.postURL, postCreateDto, {
        headers : this.httpHeaderTemplate.getHeadersForJsonReqAndRes()
      });
  }
  editThread(postEditDto : PostEditDto){
    return this.httpClient.patch(this.domainURL + this.postURL, postEditDto, {
        headers : this.httpHeaderTemplate.getHeadersForJsonReqAndRes()
      });
  }



}

