import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User, UserService } from '../service/index';

@Component({
  moduleId: module.id,
  selector: 'app-chef-list',
  templateUrl: 'chef-list.component.html',
  styleUrls: [
    '../../../bootstrap/dist/css/bootstrap.css',
    'chef-list.component.css'
  ]
})
export class ChefListComponent  implements OnInit {
  currentUser: User;
  users: User[];
  errorMessage: string;

  constructor(private service: UserService,
              private router: Router) { }

  ngOnInit() {
    this.getAllChefs();
  }

  getAllChefs(): void {
    this.service
      .getAllChefs()
      .then(users => this.users = users);
  }

  setCurrentUser(user: User) {
    this.currentUser = user;
  }
}
