import { Injectable } from '@angular/core';

@Injectable()
export class EventService {

  private events = [

    {
      id: 10,
      title: 'Demo Event 1',

      start: { year: 2018, month: 12, day: 4 },
      end: { year: 2018, month: 12, day: 7 }
    },
    {
      id: 20,
      title: 'Chelsea\'s Birthday',

      start: { year: 2018, month: 12, day: 7, hour: 12, minute: 0 },
      end: { year: 2018, month: 12, day: 7, hour: 13, minute: 0 }
    },
    {
      id: 30,
      title: 'Demo Event 2',

      start: { year: 2018, month: 12, day: 13, hour: 15, minute: 0 },
      end: { year: 2018, month: 12, day: 23, hour: 16, minute: 45 }
    },
    {
      id: 31,
      title: 'Demo Event 3',

      start: { year: 2018, month: 12, day: 17 },
      end: { year: 2018, month: 12, day: 20 }
    },
    {
      id: 32,
      title: 'Demo Event 4',

      start: { year: 2018, month: 12, day: 19 },
      end: { year: 2018, month: 12, day: 21 }
    },
    {
      id: 33,
      title: 'Demo Event 5',

      start: { year: 2018, month: 12, day: 21 },
      end: { year: 2018, month: 12, day: 23 }
    },
    {
      id: 34
      ,
      title: 'Demo Event 6',

      start: { year: 2018, month: 12, day: 21 },
      end: { year: 2018, month: 12, day: 23 }
    },
    {
      id: 40,
      title: 'Christmas Eve',

      start: { year: 2018, month: 12, day: 24 },
      end: { year: 2018, month: 12, day: 24 }
    },
    {
      id: 50,
      title: 'Christmas',

      start: { year: 2018, month: 12, day: 25 },
      end: { year: 2018, month: 12, day: 25 }
    },
    {
      id: 60,
      title: 'Boxing Day',

      start: { year: 2018, month: 12, day: 26 },
      end: { year: 2018, month: 12, day: 26 }
    },
    {
      id: 70,
      title: 'New Year\'s Eve',

      start: { year: 2018, month: 12, day: 30 },
      end: { year: 2018, month: 12, day: 30 }
    },
    {
      id: 80,
      title: 'New Year\'s Eve Party',

      start: { year: 2018, month: 12, day: 30, hour: 18, minute: 0 },
      end: { year: 2018, month: 12, day: 30 }
    }
  ];

  private eventComponents = {};

  constructor() { }

  getWeekEvents(days) {
    const that = this;
    const events = [];

    days.forEach(function (date) {
      let positions = [];
      let position = 0;

      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();

      that.events.forEach(function (event) {

        if (event.start.year <= year && event.end.year >= year) {
          if (event.start.month <= month && event.end.month >= month) {
            if (event.start.day <= day && event.end.day >= day) {
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
