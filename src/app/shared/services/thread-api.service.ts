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
    lnhUser? : string, type? : string,
    allowAudible? : boolean, genres? : string[],
    pageable? : Pageable
  }) : Observable<any> {
    let params = new HttpParams();
    params = filterConfig.lnhUser ? params.append('lnhUser', filterConfig.lnhUser) : params;
    params = filterConfig.type ? params.append('type', filterConfig.type) : params;
    params = filterConfig.allowAudible ? params.append('allowAudible', filterConfig.allowAudible.toString()) : params;
    filterConfig.genres?.forEach(genre => params = params.append('genres', genre));
    params = filterConfig.pageable ? params.append('pageNum', filterConfig.pageable.pageNum.toString()).append('pageSize', filterConfig.pageable.pageSize.toString()) : params;


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

