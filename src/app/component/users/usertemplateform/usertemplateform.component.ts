import { Component } from '@angular/core';
import { IUser } from 'src/app/Modules/i-user';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usertemplateform',
  templateUrl: './usertemplateform.component.html',
  styleUrls: ['./usertemplateform.component.css'],
})
export class UsertemplateformComponent {
  user: IUser = {} as IUser;
  constructor(private userService: UserService, private router: Router) {}
  addUser() {
    this.userService.signUpUser(this.user).subscribe({
      next: (user) => {
        this.router.navigate(['/Products']);
        console.log(user);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
