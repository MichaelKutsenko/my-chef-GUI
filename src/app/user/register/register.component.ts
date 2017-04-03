import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {UserService} from '../service/user.service';

import {User, Chef} from '../service/index';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'app-register-form',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css']
})

export class RegisterComponent {
  @Input()
  login: string;
  @Input()
  password: string;
  @Input()
  email: string;
  @Input()
  firstName: string;
  @Input()
  lastName: string;
  @Input()
  pricePerHour: number;
  @Input()
  minPrice: number;
  @Input()
  description: string;
  @Input()
  isChef: boolean;

  currentUser: User = new User();
  currentChef: Chef;

  errorMessage: string;

  constructor(private service: UserService, private router: Router) {
  }

  public saveUser() {
    this.currentUser.login = this.login;
    this.currentUser.email = this.email;
    this.currentUser.firstName = this.firstName;
    this.currentUser.lastName = this.lastName;
    this.currentUser.city_id = '3';
    this.currentUser.isChef = this.isChef;

    if (!this.isChef) {
      this.currentChef = null;
    } else {
      this.currentChef = new Chef(this.pricePerHour, this.minPrice, this.description);
      this.currentUser.chef = this.currentChef;
    }

    this.service.addUser(this.currentUser)
      .then(
        () => this.goBack(),
        error => this.errorMessage = error
      );
  }

  public goBack() {
    this.router.navigate(['/users']);
  }
}
