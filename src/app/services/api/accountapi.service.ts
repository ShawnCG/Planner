import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class AccountApiService extends ApiService {

  check(callback) {
    const request = this.get('/check');

    request
      .subscribe(callback);
  }

  heartbeat() {
    this.get('/heartbeat');
  }
}
