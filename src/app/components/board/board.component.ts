import { BoardItem } from './../../class/board/board-item.class';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @Input('board-items') boardItems: BoardItem[];

  constructor() { }

  ngOnInit() {
  }

}