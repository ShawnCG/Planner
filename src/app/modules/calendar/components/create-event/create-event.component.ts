import { Component, OnInit, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  private shown = false;

  constructor(private elRef: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
  }

  toggleForm() {
    this.shown = !this.shown;

    this.renderer.setElementClass(this.elRef.nativeElement, 'shown', this.shown);
  }

}
