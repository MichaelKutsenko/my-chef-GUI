import {Routes} from '@angular/router';
import {ChefListComponent} from './user/chef-list/chef-list.component';
import {LoginComponent} from './user/login/login.component';
import {RegisterComponent} from "./user/register/register.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'users',
    component: ChefListComponent
  }
];
