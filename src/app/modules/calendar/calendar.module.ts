import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './components/calendar/calendar.component';
import { EventService } from './services/event.service';
import { EventComponent } from './components/event/event.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { CreateEventFormComponent } from './components/forms/create-event-form/create-event-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,

    HttpClientModule,
    FormsModule
  ],
  providers: [EventService],
  declarations: [CalendarComponent, EventComponent, CreateEventComponent, CreateEventFormComponent],

  exports: [
    CalendarComponent,
    CreateEventComponent
  ]
})
export class CalendarModule { }
