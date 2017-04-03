import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LocalStorageModule} from 'angular-2-local-storage';

import {AppComponent} from './app.component';
import {routes} from './app.routes';

import {ChefListComponent} from './user/chef-list/chef-list.component';
import {UserService} from './user/service/index';
import {UserDetailsComponent} from './user/user-details/user-details.component';
import {LoginComponent} from './user/login/login.component';
import {RegisterComponent} from './user/register/register.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    LocalStorageModule.withConfig({
      prefix: 'chef-gui-app',
      storageType: 'localStorage'
    })
  ],
  declarations: [
    AppComponent,
    ChefListComponent,
    UserDetailsComponent,
    LoginComponent,
    RegisterComponent
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
