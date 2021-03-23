import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {

  JWT = 'jwt';

  constructor() { }

  getUserSession() { return localStorage.getItem(this.JWT); }
  setUserSession(jwt : string) { localStorage.setItem(this.JWT, jwt); }

  clearUserSession() { localStorage.removeItem(this.JWT); }

}
