import { TestBed } from '@angular/core/testing';

import { CalendarApiService } from './calendarapi.service';

describe('CalendarapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalendarApiService = TestBed.get(CalendarApiService);
    expect(service).toBeTruthy();
  });
});
