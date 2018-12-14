import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalendarModule } from './modules/calendar/calendar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }