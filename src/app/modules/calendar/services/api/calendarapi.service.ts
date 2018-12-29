import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/components/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class CalendarApiService extends ApiService {

  protected baseUrl = 'https://3d4e5d0b-3ae8-41a6-adc9-4e27cc8127a8.mock.pstmn.io/api';
}
