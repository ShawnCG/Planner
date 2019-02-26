import { ApiService } from "../services/api.service";
import { environment } from "src/environments/environment";
import { CalendarApiService } from "../services/api/calendarapi.service";
import { EventApiService } from "../services/api/eventapi.service";

if (environment.production) {
  ApiService.setBaseUrl("");
  EventApiService.setBaseUrl(ApiService.getBaseUrl() + "/events");
} else {
  ApiService.defaults.secure = true;
  ApiService.setBaseUrl(
    "3d4e5d0b-3ae8-41a6-adc9-4e27cc8127a8.mock.pstmn.io/api"
  );
  EventApiService.setBaseUrl(ApiService.getBaseUrl() + "/events");
}
