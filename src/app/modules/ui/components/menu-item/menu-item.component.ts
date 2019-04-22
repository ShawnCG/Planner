import { MenuItem } from "./menu-item.class";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-menu-item",
  templateUrl: "./menu-item.component.html",
  styleUrls: ["./menu-item.component.css"]
})
export class MenuItemComponent implements OnInit {
  @Input() item: MenuItem;
  @Input() position: number;

  @Input() margin?;

  constructor() {}

  get id(): string {
    return this.item.id;
  }

  get label(): string {
    return this.item.label || '';
  }

  get icon(): string {
    return this.item.icon || '';
  }

  get link(): string {
    return this.item.link || '';
  }

  get submenu(): MenuItem[] {
    return this.item.submenu || [];
  }

  ngOnInit() {}

  getLabelStyles() {
    let styles = {};
    if (this.position > 0) {
      //styles['transition-delay'] = (this.position * 0.04).toString() + 's';
    }

    return styles;
  }

  getStyles() {
    
  }
  
}
