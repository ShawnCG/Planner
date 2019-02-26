import { CalendarPageComponent } from "./../../pages/calendar-page/calendar-page.component";
import { ListsPageComponent } from "./../../pages/lists-page/lists-page.component";
import { HomePageComponent } from "./../../pages/home-page/home-page.component";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuComponent } from "./components/menu/menu.component";
import { MenuItemComponent } from "./components/menu-item/menu-item.component";
import { SubMenuComponent } from "./components/sub-menu/sub-menu.component";
import { ContentComponent } from "./components/content/content.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: "", component: HomePageComponent },
      { path: "calendar", component: CalendarPageComponent },
      { path: "lists", component: ListsPageComponent }
    ])
  ],
  declarations: [
    MenuComponent,
    MenuItemComponent,
    SubMenuComponent,
    ContentComponent
  ],

  exports: [
    MenuComponent,
    MenuItemComponent,
    SubMenuComponent,
    ContentComponent
  ]
})
export class UiModule {}
