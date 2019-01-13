import { ApiService } from '../services/api.service';
import { environment } from 'src/environments/environment';
import { CalendarApiService } from '../services/api/calendarapi.service';
import { EventApiService } from '../services/api/eventapi.service';
import { AccountApiService } from '../services/api/accountapi.service';

if (environment.production) {
    ApiService.setBaseUrl('');
    CalendarApiService.setBaseUrl(ApiService.getBaseUrl() + '');
} else {
    ApiService.setBaseUrl('206.189.199.10/api');
    CalendarApiService.setBaseUrl(ApiService.getBaseUrl() + '/calendars');
}
