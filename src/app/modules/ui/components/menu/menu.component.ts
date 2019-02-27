import { MenuItem } from "./../menu-item/menu-item.class";
import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { SubMenuComponent } from "../sub-menu/sub-menu.component";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  @Input() items: MenuItem[] = [];

  constructor() {}

  ngOnInit() {}
  
  trackMenuItem(index, item) {
    return item.id;
  }
}
