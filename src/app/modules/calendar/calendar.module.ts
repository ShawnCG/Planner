import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DayComponent } from '../../Modules/calendar/components/day/day.component';
import { EventService } from './services/event.service';
import { EventComponent } from './components/event/event.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [EventService],
  declarations: [CalendarComponent, DayComponent, EventComponent],

  exports: [CalendarComponent]
})
export class CalendarModule { }
