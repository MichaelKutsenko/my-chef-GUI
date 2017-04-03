import {Injectable} from '@angular/core';
import {LocalStorageService} from 'angular-2-local-storage';
import {Headers, Http, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {User} from './index';
import {Router} from '@angular/router';

@Injectable()
export class UserService {
  private usersUrl = 'http://localhost:8105';

  private headers = new Headers({'Content-Type': 'application/json'});
  private token: string;
  public loggedUser: User;

  constructor(private http: Http, private localStService: LocalStorageService, private routes: Router) {
  }

  login(login: string, password: string) {
    this.token = '';
    const url = `${this.usersUrl}/auth`;
    const data = {'login': login, 'password': password};

    return this.http.post(url, data, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.loggedUser = response.json().user;
        this.token = response.json().token;
        this.localStService.add('login', login);
        this.localStService.add('password', password);
        this.localStService.add('token', this.token);
      })
      .catch(this.handleError);

  }

  getUsers(): Promise<User[]> {
    const url = `${this.usersUrl}/users/all`;
    const tok: string = this.localStService.get<string>('token');
    this.headers.set('X-Authorization', tok);
    const options = new RequestOptions({headers: this.headers});

    return this.http.get(url, options)
      .toPromise()
      .then(response => {
        console.log('user JSON: ' + JSON.stringify(response.json()));
        return Promise.resolve(response.json().users as User[]);
      })
      .catch(this.handleError);
  }

  getAllChefs(): Promise<User[]> {
    const url = `${this.usersUrl}/users/chefs/all`;
    const tok: string = this.localStService.get<string>('token');
    this.headers.set('X-Authorization', tok);
    const options = new RequestOptions({headers: this.headers});

    return this.http.get(url, options)
      .toPromise()
      .then(response => {
        console.log('user JSON: ' + JSON.stringify(response.json()));
        return Promise.resolve(response.json().users as User[]);
      })
      .catch(this.handleError);
  }

  public addUser(user: User) {
    return this.http.post(`${this.usersUrl}/users/add`, {'user': user}, {headers: this.headers})
      .toPromise()
      .catch(this.handleError);
  }


  // create(user:  User): Promise<User> {
  //   const url = `${this.usersUrl}/users/add`;
  //   let data={"user":null};
  //   data.user = user;
  //   return this.http.post(url,data,{headers: this.headers})
  //     .toPromise()
  //     .then(response =>{
  //       console.log("user create JSON: "+JSON.stringify(response.json()));
  //       response.json().users[0] as LibUser;
  //     })
  //     .catch(
  //       this.handleError
  //     );
  // }

  // create(user: User): Promise<User> {
  //   const url = `${this.usersUrl}/users/add`;
  //   let data = {'user': null};
  //   data.user = user;
  //
  //
  //   return this.http.post(url, data, {headers: this.headers})
  //     .toPromise()
  //     .then(response => {
  //       console.log('user JSON: ' + JSON.stringify(response.json()));
  //       return Promise.resolve(response.json().users[0] as User);
  //     })
  //     .catch(this.handleError);
  // }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
