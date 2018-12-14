import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  @Input() date: Date;
  @Input() sub = false;

  // Todo: Make a interface for the events structure.
  @Input() events;

  constructor() { }

  ngOnInit() {
  }

  getDate() {
    return this.date.getDate();
  }

}
