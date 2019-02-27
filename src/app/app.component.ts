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
        //new MenuItem("demo-item", "Demo", "fas fa-briefcase", "network"),
        //new MenuItem("demo-item-2", "Demo 2", "fas fa-briefcase", "network"),
      ]),
      new MenuItem("calendar", "Calendar", "fas fa-calendar", "calendar"),
      new MenuItem("lists", "Lists", "fas fa-list-ul", "lists", [
        new MenuItem("favorite-1", "Shopping List (demo)", "fas fa-star", "lists/1/"),
        new MenuItem("favorite-2", "House Repairs (demo)", "fas fa-star", "lists/2/"),
        new MenuItem("favorite-3", "Christmas List (demo)", "fas fa-star", "lists/3/"),
        new MenuItem("favorite-4", "Naughty or Nice (demo) ", "fas fa-star", "lists/4/")
        //new MenuItem("demo-item-2", "Demo 2", "fas fa-briefcase", "network"),
      ])
    ];
  }
}
