import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {

  JWT = 'jwt';
  defaultUserSession = "";

  constructor() { }

  getUserSession() {
    const userSession = localStorage.getItem(this.JWT);
    return userSession ?  userSession : this.defaultUserSession;
  }
  setUserSession(jwt: string) { localStorage.setItem(this.JWT, jwt); }

  clearUserSession() { localStorage.removeItem(this.JWT); }

}
