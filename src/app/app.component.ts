import { MenuItem } from "./modules/ui/components/menu-item/menu-item.class";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { UIService } from "./modules/ui/services/ui.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Planner";

  router = Router;

  constructor(private uiService: UIService) {}

  ngOnInit() {}

  getOrientation() {
    return this.uiService.getOrientation();
  }

  getMenuItems(): MenuItem[] {
    return [
      new MenuItem("index", "Home", "fas fa-fire", "", [
        new MenuItem("boards", "Boards", "fas fa-clipboard", "boards")
      ]),
      new MenuItem("network", "Network", "fas fa-network-wired", "network"),
      new MenuItem("calendar", "Calendar", "fas fa-calendar", "calendar", [
        new MenuItem("schedules", "Schedules", "fas fa-calendar-alt", "schedules"),
        new MenuItem("routines", "Routines", "fas fa-redo-alt", "routines")
      ]),
      new MenuItem("goals", "Goals", "fas fa-flag-checkered", "goals"),
      new MenuItem("todo", "Todo", "fas fa-tasks", "tasks"),

      new MenuItem("ui", "UI", "fab fa-uikit", "ui")
      
    ];
  }
}
