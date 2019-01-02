import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/components/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class CalendarApiService extends ApiService {

  protected defaults = ApiService.assignDefaults({
    secure: true
  });

}
