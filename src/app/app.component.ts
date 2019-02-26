import { MenuItem } from "./modules/ui/components/menu-item/menu-item.class";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Planner";

  router = Router;

  ngOnInit() {}

  getMenuItems(): MenuItem[] {
    return [
      new MenuItem("index", "Home", "fas fa-fire", ""),
      new MenuItem("network", "Demo Item", "fas fa-network-wired", "network", [
        new MenuItem(
          "custom-group-1",
          "Friends",
          "fas fa-user-friends",
          "network"
        ),
        new MenuItem("custom-group-2", "Work", "fas fa-briefcase", "network"),
        new MenuItem(
          "find-connections",
          "Find More",
          "fas fa-search",
          "network"
        )
      ]),
      new MenuItem("calendar", "Calendar", "fas fa-calendar", "calendar"),
      new MenuItem("lists", "Lists", "fas fa-list-ul", "lists")
    ];
  }
}
