import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {

  JWT = 'jwt';
  defaultUserSession = "eyJhbGciOiJSUzUxMiJ9.eyJzdWIiOiJjY2hhbkBtczMtaW5jLmNvbSIsImlzcyI6ImNvbS50eWNvcnAubG5oIiwiaWF0IjoxNjE5NjUyMDExLCJuYmYiOjE2MTk2NTIwMTEsImV4cCI6MTYxOTY2ODgwMH0.ubWfMS-13G03mP0P--ynXuy-c-n_fvmKO5WpeWpw1NCyEnGV4ah4va1_FoO4qNKo5qXM9q9QqWi6yDToaEIsXd0eMsaSGyAe2p8bN9-mSaibGaNErT5fbQn5ZjaZuk1IzuZUHrFYuEr-U74epKWdd_LgaQeVSsN18iA4prrT-zvweEGZX11Y_QB6LIUG21i9z4vu0tvVuxQlFh5zaNDAv6euuvBXjXk8QcfS-ZPvbMMl7wjZb8aVDHsa1mlVh84doyktPbKos0LXY28P9jmLIqWMVAmhRoqQTGZPtLDA6TrErYoRPqATC9DaKkL0_dPmWkIWze9_P4I9acvjkZCCMQ";

  constructor() { }

  getUserSession() {
    const userSession = localStorage.getItem(this.JWT);
    return userSession ?  userSession : this.defaultUserSession;
  }
  setUserSession(jwt: string) { localStorage.setItem(this.JWT, jwt); }

  clearUserSession() { localStorage.removeItem(this.JWT); }

}
