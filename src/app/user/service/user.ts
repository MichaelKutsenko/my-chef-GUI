import {Chef} from './chef';

export class User {
  // LONG
  public id: string;
  public login: string;
  public email: string;
  public firstName: string;
  public lastName: string;
  public phone: string;
  // @XmlElement(required=false)
  public grade: number;
  public gradeCouner: number;
  // LONG
  public city_id: string;
  public isChef: boolean;
  // @XmlElement(required=false)
  public chef: Chef;

  // constructor(id, login, email, firstName, lastName, phone, grade, gradeCouner, city_id, isChef, chef) {
  //   this.id = id;
  //   this.login = login;
  //   this.email = email;
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  //   this.phone = phone;
  //   this.grade = grade;
  //   this.gradeCouner = gradeCouner;
  //   this.city_id = city_id;
  //   this.isChef = isChef;
  //   this.chef = chef;
  // }
}
