import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AccountApiService } from './api/accountapi.service';

import { AttemptModel } from 'src/app/models/attempt-model/attempt-model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private loggedIn = null;
  private loginRedirectUrl = null;

  constructor(private api: AccountApiService, private router: Router) {
    this.init();
  }

  private init() {
    // this.check();
  }

  isLoggedIn() {
    return this.loggedIn();
  }

  check() {
    this.api.get('/check')
      .subscribe(function (resp) {
        if (resp.status === true) {
          if (this.isLoggedIn() !== true) {
            this.loggedIn = true;
            if (this.loginRedirectUrl !== null) {
              this.router.navigateByUrl(this.loginRedirectUrl);
            }
          }
        } else {
          this.loggedIn = false;
          this.loginRedirectUrl = this.router.url;
          this.router.navigateByUrl('/login');
        }
      }.bind(this));
  }

  attempt(attempt: AttemptModel) {
    this.api.post('/attempt', {
      data: attempt.getAll()
    })
      .subscribe(function (resp) {
        if (resp.status === '1') {
          this.loggedIn = true;
          if (this.loginRedirectUrl !== null) {
            this.router.navigateByUrl(this.loginRedirectUrl);
            this.loginRedirectUrl = null;
          } else {
            this.router.navigateByUrl('/');
          }
        }
      }.bind(this));
  }
}
