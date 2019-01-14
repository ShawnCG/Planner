import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { List } from '../list/list.class';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  @Input() lists: List[] = [];

  @Output()
  remove: EventEmitter<List> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onRemoveList(list: List) {
    this.remove.emit(list);
  }

}
