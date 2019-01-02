import { Injectable } from '@angular/core';
import { EventApiService } from './../api/eventapi.service';

@Injectable()
export class EventService {

  private loadedEvents = [];

  private events = [
  ];

  private eventComponents = {};

  constructor(private api: EventApiService) { }

  loadMonthEvents(year, month) {
    const request = this.api.get('/list', {
      data: {
        c: [1, 2],
        key: 1,
        y: year,
        m: month
      }
    });

    request
      .subscribe(function (resp) {
        resp.forEach(function (event) {
          if (this.loadedEvents.indexOf(event.id) === -1) {
            this.events.push(event);
            this.loadedEvents.push(event.id);
          }
        }.bind(this));
      }.bind(this));
  }

  getWeekEvents(days) {
    const that = this;
    const events = [];

    days.forEach(function (date) {
      const positions = [];
      let position = 0;

      const dateTime = date.getTime() / 1000;

      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();

      that.events.forEach(function (event: any) {

        const startDate = new Date(event.start.year, event.start.month - 1, event.start.day, 0, 0, 0, 0);
        const endDate = new Date(event.end.year, event.end.month - 1, event.end.day, 23, 59, 59);

        const startTime = startDate.getTime() / 1000;
        const endTime = endDate.getTime() / 1000;

        if (startTime <= dateTime && endTime >= dateTime) {
          if (events.indexOf(event) === -1) {
            let eventPosition = 0;
            while (positions.indexOf(eventPosition) !== -1) {
              eventPosition++;
            }
            event.position = eventPosition;
            events.push(event);

            positions.push(eventPosition);
          } else {
            if (positions.indexOf(event.position) === -1) {
              positions.push(event.position);
            }
            position++;
          }
        }

      });

    });

    return events;

  }


  getDayEvents(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const events = [];

    this.events.forEach(function (event) {

      if (event.start.year <= year && event.end.year >= year) {
        if (event.start.month <= month && event.end.month >= month) {
          if (event.start.day <= day && event.end.day >= day) {
            events.push(event);
          }
        }
      }

    });

    return events;
  }
}
