import { ApiService } from '../components/api/api.service';
import { environment } from 'src/environments/environment';
import { CalendarApiService } from '../modules/calendar/services/api/calendarapi.service';
import { EventApiService } from '../modules/calendar/services/api/eventapi.service';

if (environment.production) {
    ApiService.setBaseUrl('');
    CalendarApiService.setBaseUrl(ApiService.getBaseUrl() + '');
} else {
    ApiService.setBaseUrl('planner-api.test/api');
    CalendarApiService.setBaseUrl(ApiService.getBaseUrl() + '/calendars');
    EventApiService.setBaseUrl(ApiService.getBaseUrl() + '/events');
}
