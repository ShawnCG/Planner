import { UIService } from './../../services/ui.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor(private uiService: UIService) { }

  ngOnInit() {
  }

}
