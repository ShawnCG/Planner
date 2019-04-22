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
import { TestPageComponent } from "./pages/test-page/test-page.component";
import { UIService } from "./modules/ui/services/ui.service";
import { FeedPageComponent } from "./pages/feed-page/feed-page.component";
import { BoardItemComponent } from './components/board/board-item/board-item.component';
import { BoardComponent } from './components/board/board.component';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';
import { GoalsPageComponent } from './pages/goals-page/goals-page.component';
import { RoutinesPageComponent } from './pages/routines-page/routines-page.component';
import { NetworkPageComponent } from './pages/network-page/network-page.component';
import { BoardsPageComponent } from './pages/boards-page/boards-page.component';
import { UiPageComponent } from './pages/ui-page/ui-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CalendarPageComponent,
    ListsPageComponent,
    ListsHeaderComponent,
    ListsFooterComponent,
    ListsComponent,
    ListComponent,
    TestPageComponent,
    FeedPageComponent,
    BoardItemComponent,
    BoardComponent,
    TasksPageComponent,
    GoalsPageComponent,
    RoutinesPageComponent,
    NetworkPageComponent,
    BoardsPageComponent,
    UiPageComponent
  ],

  providers: [UIService],

  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "", component: FeedPageComponent },
      { path: "boards", component: BoardsPageComponent },
      { path: "network", component: NetworkPageComponent },
      { path: "calendar", component: CalendarPageComponent },
      { path: "lists", component: ListsPageComponent },
      { path: "tasks", component: TasksPageComponent },
      { path: "routines", component: RoutinesPageComponent },
      { path: "goals", component: GoalsPageComponent },

      { path: "ui", component: UiPageComponent}
    ]),
    UiModule,
    FormsModule,
    CalendarModule
  ],
  bootstrap: [AppComponent],

  entryComponents: []
})
export class AppModule {}
