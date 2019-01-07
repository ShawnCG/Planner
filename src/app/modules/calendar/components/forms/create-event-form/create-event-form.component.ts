import { Component, OnInit } from '@angular/core';
import { EventModel } from '../../../models/Event.model';

@Component({
  selector: 'app-create-event-form',
  templateUrl: './create-event-form.component.html',
  styleUrls: ['./create-event-form.component.css']
})
export class CreateEventFormComponent {

  model = new EventModel('', new Date(), new Date());

  constructor() { }



  submitted = false;

  onSubmit() {

    this.submitted = true;

  }

}
