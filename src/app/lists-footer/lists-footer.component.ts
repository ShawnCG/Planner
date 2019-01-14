import { Component, Input } from '@angular/core';
import { List } from '../list/list.class';

@Component({
  selector: 'app-lists-footer',
  templateUrl: './lists-footer.component.html',
  styleUrls: ['./lists-footer.component.css']
})
export class ListsFooterComponent {

  @Input() lists: List[];

  constructor() { }

}
