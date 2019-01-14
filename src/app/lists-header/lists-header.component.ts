import { Component, Output, EventEmitter } from '@angular/core';
import { List } from '../list/list.class';

@Component({
  selector: 'app-lists-header',
  templateUrl: './lists-header.component.html',
  styleUrls: ['./lists-header.component.css']
})
export class ListsHeaderComponent {

  newList: List = new List();

  @Output()
  add: EventEmitter<List> = new EventEmitter();

  constructor() { }

  addList() {
    this.add.emit(this.newList);
    this.newList = new List();
  }
}
