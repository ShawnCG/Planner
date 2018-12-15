import { Injectable } from '@angular/core';

@Injectable()
export class EventService {

  private events = [

    {
      id: 1,
      title: 'Chelsea\'s Birthday',

      start: { year: 2018, month: 12, day: 7, hour: 12, minute: 0 },
      end: { year: 2018, month: 12, day: 7, hour: 13, minute: 0 }
    },
    {
      id: 2,
      title: 'Demo Event 1',

      start: { year: 2018, month: 12, day: 9 },
      end: { year: 2018, month: 12, day: 11 }
    },
    {
      id: 3,
      title: 'Demo Event 2',

      start: { year: 2018, month: 12, day: 9, hour: 15, minute: 0 },
      end: { year: 2018, month: 12, day: 9, hour: 16, minute: 45 }
    },
    {
      id: 4,
      title: 'Christmas Eve',

      start: { year: 2018, month: 12, day: 24 },
      end: { year: 2018, month: 12, day: 24 }
    },
    {
      id: 5,
      title: 'Christmas',

      start: { year: 2018, month: 12, day: 25 },
      end: { year: 2018, month: 12, day: 25 }
    },
    {
      id: 6,
      title: 'Boxing Day',

      start: { year: 2018, month: 12, day: 26 },
      end: { year: 2018, month: 12, day: 26 }
    },
    {
      id: 7,
      title: 'New Year\'s Eve',

      start: { year: 2018, month: 12, day: 30 },
      end: { year: 2018, month: 12, day: 30 }
    },
    {
      id: 7,
      title: 'New Year\'s Eve Party',

      start: { year: 2018, month: 12, day: 30, hour: 18, minute: 0 },
      end: { year: 2018, month: 12, day: 30 }
    }
  ];

  constructor() { }


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
