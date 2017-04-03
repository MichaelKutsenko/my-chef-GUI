import {Component} from '@angular/core';

import {UserService} from '../service/user.service';

import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'app-login-form',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent {
  public user_login: string;
  public user_password: string;
  public errorMsg = '';

  constructor(private userService: UserService) {
  }

  login() {
    this.userService.login(this.user_login, this.user_password)
      .then(() => {
          this.errorMsg = 'Successfull login';
        }
      )
      .catch(() => {
          this.errorMsg = 'Failed to login';
        }
      );
  }

}
