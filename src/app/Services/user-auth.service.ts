import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
isLogedUser:BehaviorSubject<boolean>;
  constructor() {
this.isLogedUser=new BehaviorSubject<boolean>(this.userStatus);

  }
  login(userEmail:string,userPassword:string){
let userToken='123456';
localStorage.setItem('token',userToken);
this.isLogedUser.next(true)
  }
  logOut(){
    localStorage.removeItem("token");
    this.isLogedUser.next(false);
  }
  get userStatus():boolean{
    return (localStorage.getItem('token')?true:false)
  }
  userStatusChangeWithObservable():Observable<boolean>{
return  this.isLogedUser.asObservable();
  }
}
