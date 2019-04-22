import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { MenuComponent } from "./components/menu/menu.component";
import { MenuItemComponent } from "./components/menu-item/menu-item.component";
import { SubMenuComponent } from "./components/sub-menu/sub-menu.component";
import { ContentComponent } from "./components/content/content.component";
import { HeaderComponent } from './components/header/header.component';
import { ContainerComponent } from './components/container/container.component';
import { OrientationDirective } from "./directives/orientation.directive";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    MenuComponent,
    MenuItemComponent,
    SubMenuComponent,
    ContentComponent,
    HeaderComponent,
    ContainerComponent,

    OrientationDirective
  ],

  exports: [
    MenuComponent,
    MenuItemComponent,
    HeaderComponent,
    SubMenuComponent,
    ContentComponent,

    ContainerComponent,

    OrientationDirective
  ]
})
export class UiModule {}
