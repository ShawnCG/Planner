import { Component, OnInit, Input, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input() event;
  @Input() week: Array<Date>;
  @Input() position;


  constructor(private elRef: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
    this.setClasses();
  }

  getTitle() {

    return this.event.title;
  }

  setPosition() {
    const that = this;
    const classArr = ['event-host'];

    this.week.forEach(function (date) {

    });
  }

  setClasses() {
    const classArr = ['event-host'];

    // Set position class
    classArr.push('position-' + this.position);

    let start = null;
    let end = null;

    this.week.forEach(function (date) {
      if (date.getDate().toString() === this.event.start.day) {
        start = date.getDay();
      }
      if (date.getDate().toString() === this.event.end.day) {
        end = date.getDay();
      }
    }.bind(this));

    if (start === null) {
      classArr.push('start-before');
    } else {
      classArr.push('start-' + start);
    }

    if (end === null) {
      classArr.push('end-after');
    } else {
      classArr.push('end-' + end);
    }

    classArr.forEach(function (classname) {
      this.renderer.setElementClass(this.elRef.nativeElement, classname, true);
    }.bind(this));
  }

}
