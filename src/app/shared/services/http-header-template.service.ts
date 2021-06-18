import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpHeaderTemplateService {

  constructor() { }

  getHeadersForJsonRes(){ return new HttpHeaders().append('Accept', 'application/json'); }

  getHeadersForJsonReqAndRes(){
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    return headers;
  }

}
