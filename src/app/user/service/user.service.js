"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import { LocalStorageService } from 'angular-2-local-storage';
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.usersUrl = "http://localhost:8105/users";
    }
    UserService.prototype.getUsers = function () {
        var url = this.usersUrl + "/all";
        // let tok:string = this.localStService.get<string>('token');
        // this.headers.append('X-Authorization',tok);
        // let options = new RequestOptions({ headers: this.headers });
        return this.http.get(url)
            .toPromise()
            .then(function (response) {
            console.log("user JSON: " + JSON.stringify(response.json()));
            return Promise.resolve(response.json().users);
        })
            .catch(this.handleError);
    };
    UserService.prototype.getAllChefs = function () {
        var url = this.usersUrl + "/chefs/all";
        // let tok:string = this.localStService.get<string>('token');
        // this.headers.append('X-Authorization',tok);
        // let options = new RequestOptions({ headers: this.headers });
        return this.http.get(url)
            .toPromise()
            .then(function (response) {
            console.log("user JSON: " + JSON.stringify(response.json()));
            return Promise.resolve(response.json().users);
        })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map