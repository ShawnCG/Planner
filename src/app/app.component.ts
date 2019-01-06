import { Component, OnInit } from '@angular/core';
import { AccountService } from './services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Planner';

  router = Router;

  constructor(private account: AccountService) { }

  ngOnInit() {
  }
}
