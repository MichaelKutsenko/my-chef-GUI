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
var router_1 = require("@angular/router");
var index_1 = require("../service/index");
var ChefListComponent = (function () {
    function ChefListComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    ChefListComponent.prototype.ngOnInit = function () {
        this.getAllChefs();
    };
    ChefListComponent.prototype.getAllChefs = function () {
        var _this = this;
        this.service
            .getAllChefs()
            .then(function (users) { return _this.users = users; });
    };
    ChefListComponent.prototype.setCurrentUser = function (user) {
        this.currentUser = user;
    };
    return ChefListComponent;
}());
ChefListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "chef-list",
        templateUrl: "chef-list.component.html",
        styleUrls: [
            "../../../node_modules/bootstrap/dist/css/bootstrap.css",
            "chef-list.component.css"
        ]
    }),
    __metadata("design:paramtypes", [index_1.UserService,
        router_1.Router])
], ChefListComponent);
exports.ChefListComponent = ChefListComponent;
//# sourceMappingURL=chef-list.component.js.map