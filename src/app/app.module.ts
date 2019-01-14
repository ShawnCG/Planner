import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { CalendarModule } from './modules/calendar/calendar.module';

import './config/config';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { ListsHeaderComponent } from './lists-header/lists-header.component';
import { ListsFooterComponent } from './lists-footer/lists-footer.component';
import { ListsComponent } from './lists/lists.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CalendarPageComponent,
    ListPageComponent,
    ListsHeaderComponent,
    ListsFooterComponent,
    ListsComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'calendar', component: CalendarPageComponent },
      { path: 'list', component: ListPageComponent }
    ]),

    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
