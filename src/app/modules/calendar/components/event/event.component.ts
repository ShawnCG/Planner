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
    const that = this
    const classArr = ['event-host'];

    let start = null;
    let end = null;

    this.week.forEach(function (date) {

    });
  }

  setClasses() {
    const that = this;
    const classArr = ['event-host'];

    // Set position class
    classArr.push('position-' + this.position);

    let start = null;
    let end = null;

    this.week.forEach(function (date) {
      if (date.getDate() == that.event.start.day) {
        start = date.getDay();
      }
      if (date.getDate() == that.event.end.day) {
        end = date.getDay();
      }
    });

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
      that.renderer.setElementClass(that.elRef.nativeElement, classname, true)
    });
  }

}
