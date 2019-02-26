import { MenuItem } from "./../menu-item/menu-item.class";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  @Input() items: MenuItem[] = [];

  constructor() {}

  ngOnInit() {}
}
