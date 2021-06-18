import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserSessionService } from './user-session.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userSessionService : UserSessionService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      headers: request.headers.set(`Authorization`, `Bearer ${this.userSessionService.getUserSession()}`)
    });

    return next.handle(request);
  }
}
