import { Injectable } from '@angular/core';
import { List } from '../list.class';

@Injectable({
  providedIn: 'root'
})
export class ListDataService {

  lastId: number = 0;
  lists: List[] = [];

  constructor() { }

  addList(list: List): ListDataService {
    if (!list.id) {
      list.id = ++this.lastId;
    }
    this.lists.push(list);
    return this;
  }

  deleteListById(id: number): ListDataService {
    this.lists = this.lists
      .filter(list => list.id !== id);

    return this;
  }

  updateListById(id: number, values: Object = {}): List {
    const list = this.getListById(id);
    if (!list) {
      return null;
    }
    list.assign(values);
    return list;
  }

  getAllLists(): List[] {
    return this.lists;
  }

  getListById(id: number): List {
    return this.lists
      .filter(list => list.id === id)
      .pop();
  }
}
