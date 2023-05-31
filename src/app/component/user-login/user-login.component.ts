import { Component, OnInit } from '@angular/core';
import {UserAuthService} from'src/app/Services/user-auth.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user:boolean=false;
  constructor(private userAuthService:UserAuthService){

  }
  ngOnInit(): void {
    this.user=this.userAuthService.userStatus;
  }

//   loginFunction(){
// this.userAuthService.login();
// this.user=this.userAuthService.userStatus;
// }
logoutFunction(){
  this.userAuthService.logOut();
  this.user=this.userAuthService.userStatus;

  }
}
