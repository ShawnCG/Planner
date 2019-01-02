import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './components/calendar/calendar.component';
import { EventService } from './services/event/event.service';
import { EventComponent } from './components/event/event.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,

    HttpClientModule
  ],
  providers: [EventService],
  declarations: [CalendarComponent, EventComponent],

  exports: [CalendarComponent]
})
export class CalendarModule { }
