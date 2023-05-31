import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
// userCheck:boolean;
// constructor(private userAuthService:UserAuthService){

//   this.userCheck=this.userAuthService.userStatus;
// }
//   ngOnInit(): void {

//     // this.userCheck=this.userAuthService.userStatus;
//     this.userAuthService.userStatusChangeWithObservable().subscribe(status=>{

//       this.userCheck=status;
//     });
//   }



}
