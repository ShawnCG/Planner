import { UIService } from './../services/ui.service';
import { Directive, ElementRef, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appOrientation]'
})
export class OrientationDirective implements OnInit {

  @HostBinding('attr.orientation')
  orientation = this.ui.getOrientation()

  constructor(private ui: UIService) { }

  ngOnInit() {
    this.ui.orientation$.subscribe((newOrientation) => {
      this.orientation = this.ui.getOrientation()
    })
  }
}
