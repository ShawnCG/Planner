import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DayComponent } from '../../Modules/calendar/components/day/day.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CalendarComponent, DayComponent, EventService],

  exports: [CalendarComponent]
})
export class CalendarModule { }
