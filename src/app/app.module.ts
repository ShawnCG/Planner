import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { RouterModule, Routes } from "@angular/router";

import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

import { CalendarModule } from "./modules/calendar/calendar.module";

import "./config/config";

import { HomePageComponent } from "./pages/home-page/home-page.component";
import { CalendarPageComponent } from "./pages/calendar-page/calendar-page.component";
import { ListsPageComponent } from "./pages/lists-page/lists-page.component";
import { ListsHeaderComponent } from "./lists-header/lists-header.component";
import { ListsFooterComponent } from "./lists-footer/lists-footer.component";
import { ListsComponent } from "./lists/lists.component";
import { ListComponent } from "./list/list.component";
import { UiModule } from "./modules/ui/ui.module";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CalendarPageComponent,
    ListsPageComponent,
    ListsHeaderComponent,
    ListsFooterComponent,
    ListsComponent,
    ListComponent
  ],
  imports: [BrowserModule, UiModule, FormsModule, CalendarModule],
  bootstrap: [AppComponent],

  entryComponents: []
})
export class AppModule {}
