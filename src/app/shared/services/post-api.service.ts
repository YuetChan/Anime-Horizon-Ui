import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Pageable } from '../model/pageable';
import { PostCreateDto } from '../model/post-create-dto';
import { PostEditDto } from '../model/post-edit-dto';
import { HttpHeaderTemplateService } from '../services/http-header-template.service';

@Injectable({
  providedIn: 'root'
})
export class PostApiService {

  domainURL = 'http://localhost:8080/';
  postURL = 'posts';

  constructor(
    private httpClient: HttpClient,
    private httpHeaderTemplate : HttpHeaderTemplateService) { }

  queryPostsByFilter(lnhUser : string, type : string, allowAudible : boolean, genres : string[], pageable? : Pageable) : Observable<any> {
    let params = new HttpParams();
    params = params.append('lnhUser', lnhUser);
    params = params.append('type', type);
    params = params.append('allowAudible', allowAudible.toString());
    genres.forEach(genre => params = params.append('genres', genre));
    params = params.append('pageNum', pageable.pageNum.toString()).append('pageSize', pageable.pageSize.toString());


    return this.httpClient.get(this.domainURL + this.postURL, {
      headers : this.httpHeaderTemplate.getHeadersForJsonRes(),
      params : params
    })
  }

  createPost(postCreateDto : PostCreateDto){
    return this.httpClient.post(this.domainURL + this.postURL, postCreateDto, {
        headers : this.httpHeaderTemplate.getHeadersForJsonReqAndRes()
      });
  }
  editPost(postEditDto : PostEditDto){
    return this.httpClient.patch(this.domainURL + this.postURL, postEditDto, {
        headers : this.httpHeaderTemplate.getHeadersForJsonReqAndRes()
      });
  }

}

