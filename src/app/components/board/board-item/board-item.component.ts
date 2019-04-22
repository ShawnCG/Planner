import { BoardItem } from './../../../class/board/board-item.class';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.css']
})
export class BoardItemComponent implements OnInit {

  @Input('board-item') boardItem: BoardItem;

  constructor() { }

  ngOnInit() {
  }

  get title() {
    return this.boardItem.title;
  }

  get content() {
    return this.boardItem.content;
  }

}
