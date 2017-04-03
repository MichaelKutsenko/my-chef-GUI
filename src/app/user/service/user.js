"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User(id, login, email, firstName, lastName, phone, grade, gradeCouner, city_id, isChef, chef) {
        this.id = id;
        this.login = login;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.grade = grade;
        this.gradeCouner = gradeCouner;
        this.city_id = city_id;
        this.isChef = isChef;
        this.chef = chef;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map