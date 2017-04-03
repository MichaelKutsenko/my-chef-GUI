import {Component, Input, OnInit} from "@angular/core";
import { User } from "../service/index";

@Component({
    moduleId: module.id,
    selector: 'app-user-details',
    templateUrl: 'user-details.component.html',
    styleUrls: ['user-details.component.css']
})
export class UserDetailsComponent  {
    @Input()
    user: User;
}
