import { Component } from '@angular/core';
import { AttemptModel } from 'src/app/models/attempt-model/attempt-model';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(private account: AccountService) { }

  model = new AttemptModel('', '');

  submitted = false;

  onSubmit() {

    this.submitted = true;

    this.account.attempt(this.model);
  }

}
