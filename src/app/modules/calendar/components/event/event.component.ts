import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input() event;
  @Input() date: Date;

  constructor() { }

  ngOnInit() {
  }

  eventClass() {
    let classname = [];
    const day = this.date.getDate();
    if (this.event.start.day == day) {
      classname.push('start');
    }

    if (this.event.end.day == day) {
      classname.push('end');
    }

    return classname.join(' ');
  }

}
