import {
  CanActivateFn,
  Router,

} from '@angular/router';
import { UserAuthService } from '../Services/user-auth.service';
import { inject } from '@angular/core';




export const userGuard: CanActivateFn = (route, state) => {
  const authService = inject(UserAuthService);
  const router = inject(Router);

  if(authService.userStatus){
    return true;
  }
  else{
    alert('Please Login First');
    router.navigate(['/login']);
    return false;
  }

};
