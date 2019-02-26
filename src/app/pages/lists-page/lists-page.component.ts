import { Component, OnInit } from "@angular/core";
import { List } from "src/app/list/list.class";
import { ListDataService } from "src/app/list/data/list-data.service";

@Component({
  selector: "app-lists-page",
  templateUrl: "./lists-page.component.html",
  styleUrls: ["./lists-page.component.css"]
})
export class ListsPageComponent implements OnInit {
  newList: List = new List();

  constructor(private listDataService: ListDataService) {}

  ngOnInit() {}

  onAddList(list: List) {
    this.listDataService.addList(list);
  }

  onRemoveList(list: List) {
    this.listDataService.deleteListById(list.id);
  }

  get lists() {
    return this.listDataService.getAllLists();
  }
}
