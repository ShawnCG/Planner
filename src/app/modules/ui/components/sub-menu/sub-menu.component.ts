import { MenuItem } from "./../menu-item/menu-item.class";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-sub-menu",
  templateUrl: "./sub-menu.component.html",
  styleUrls: ["./sub-menu.component.css"]
})
export class SubMenuComponent implements OnInit {
  @Input() items: MenuItem[] = [];
  @Input() position: number;

  constructor() {}

  ngOnInit() {}

  trackMenuItem(index, item) {
    return item.id;
  }

  getTopMargin() {
    const start = 36 + ((this.position) * 72);
    const margin = start - (this.items.length*72)/2;
    return Math.max(margin, ) + 'px';
  }

  isEmpty() {
    return this.items.length === 0;
  }
}
