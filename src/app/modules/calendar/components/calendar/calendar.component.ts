import { Component, OnInit, Directive, Input } from '@angular/core';
import { EventService } from '../../services/event.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  readonly MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  private date: Date;
  private year;
  private month;
  private monthFirstDay;
  private monthLastDay;
  private daysInMonth;
  private currentDate;

  private weeks;

  constructor(private eventservice: EventService) {
  }

  ngOnInit() {
    // Set Current Day
    //   - Changing the current day triggers the calendar to be generated.

    // const date = new Date;

    this.setDate(new Date());

  }

  public setDate(date: Date) {
    this.date = date;

    this.year = this.date.getFullYear();
    // `getMonth()` starts at 0.
    this.month = this.date.getMonth();
    // `getDay()` starts at 0.
    this.monthFirstDay = (new Date(this.year, this.month, 1)).getDay();
    this.monthLastDay = (new Date(this.year, this.month + 1, 0)).getDay();
    this.daysInMonth = (new Date(this.year, this.month + 1, 0)).getDate();
    this.currentDate = this.date.getDate();

    this.generate();
  }

  public makeDate(year, month, day) {
    return new Date(year, month, day);
  }

  getWeeks() {
    return this.weeks;
  }

  getMonth() {
    return this.month;
  }

  setMonth(month) {
    this.setDate(new Date(this.year, month % 12));
  }

  gotoToday() {
    this.setDate(new Date());
  }

  getNextMonth() {
    const month = this.month;
    return ((month + 1) % 12);
  }

  gotoNextMonth() {
    this.setDate(new Date(this.year, this.month + 1));
  }

  getPrevMonth() {
    let month = this.month;
    if (month <= 0) {
      month = 11;
    } else {
      month--;
    }

    return month;
  }

  gotoPrevMonth() {
    this.setDate(new Date(this.year, this.month - 1));
  }

  getYear() {
    return this.year;
  }

  setYear(year) {
    this.setDate(new Date(year, this.month));
  }

  getNextYear() {
    return this.year + 1;
  }

  setNextYear() {
    this.setDate(new Date(this.year + 1, this.month));
  }

  getPrevYear() {
    return this.year - 1;
  }

  setPrevYear() {
    this.setDate(new Date(this.year - 1, this.month));
  }

  getMonthName(month) {
    return this.MONTHS[month];
  }

  isDaySub(date) {
    return date.getMonth() !== this.month;
  }


  private generate() {

    let currentWeek = 0;
    let iDate = -this.monthFirstDay;

    // Start loop, generate empty cells.

    // Convert this to template code

    const weeks = [];

    while (currentWeek++ <= 5) {
      const week = [];
      let weekDay = 0;

      while (weekDay++ <= 6) {
        const weekDate = new Date(this.year, this.month, iDate + 1);

        week.push(weekDate);

        iDate++;
      }

      weeks.push(week);
    }
    this.weeks = weeks;


    this.eventservice.loadMonthEvents(this.year, this.month + 1);
  }
}
