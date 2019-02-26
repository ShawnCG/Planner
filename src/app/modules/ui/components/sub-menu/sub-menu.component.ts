import { MenuItem } from "./../menu-item/menu-item.class";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-sub-menu",
  templateUrl: "./sub-menu.component.html",
  styleUrls: ["./sub-menu.component.css"]
})
export class SubMenuComponent implements OnInit {
  @Input() items: MenuItem[] = [];

  constructor() {}

  ngOnInit() {}
}
