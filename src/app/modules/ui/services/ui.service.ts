import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Timer } from 'src/app/class/timer.class';

@Injectable()
export class UIService {

  orientation$ = new BehaviorSubject(window.orientation);
  orientation;



  constructor() {

    const timer = new Timer(this.updateOrientation, this);
    const timerThrottle = timer.throttle(150);
    const timerDebounce = timer.debounce(150);
    window.addEventListener('resize', function (ev) { timerThrottle(), timerDebounce() }, false);

    this.updateOrientation();
  }

  updateOrientation() {
    const newOrientation = this.getOrientation();
    if (this.orientation != newOrientation) {
      this.orientation = newOrientation;
      this.orientation$.next(this.orientation);
    }
  }


  getOrientation() {
    if ( window.innerHeight >= window.innerWidth) {
      return 'portrait';
    } else {
      return 'landscape';
    }
  }

  throttle(func, limit) {
    let inThrottle
    return function() {
      const args = arguments
      const context = this
      if (!inThrottle) {
        func.apply(context, args)
        inThrottle = true
        setTimeout(() => inThrottle = false, limit)
      }
    }
  }
}
