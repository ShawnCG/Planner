import { Component, Input, Output, EventEmitter } from '@angular/core';
import { List } from './list.class';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input() list: List;

  @Output()
  remove: EventEmitter<List> = new EventEmitter();


  constructor() { }

  removeList(list: List) {
    this.remove.emit(list);
  }
}
