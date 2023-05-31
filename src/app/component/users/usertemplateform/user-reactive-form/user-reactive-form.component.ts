import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/Modules/i-user';
import { UserService } from 'src/app/Services/user.service';
function passwordMatcher(
  pass: AbstractControl
): { [key: string]: boolean } | null {
  const passwordControl = pass.get('password');
  const confirmPasswordControl = pass.get('confirmPassword');
  if (passwordControl?.pristine || confirmPasswordControl?.pristine) {
    return null;
  }
  if (passwordControl?.value === confirmPasswordControl?.value) {
    return null;
  }
  return {
    match: true,
  };
}
@Component({
  selector: 'app-user-reactive-form',
  templateUrl: './user-reactive-form.component.html',
  styleUrls: ['./user-reactive-form.component.css'],
})
export class UserReactiveFormComponent {
  userFrom: FormGroup;
  user: IUser = {} as IUser;
  passwordMessage: string = '';
  private vaildationMassge = {
    required: 'please enter your password ',
    password: 'please enter password valid',
  };
  constructor(
    private formBuider: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.userFrom = this.formBuider.group({
      firstName: ['', [Validators.required, Validators.minLength(5)]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.email, Validators.required]],
      passwordGroup: this.formBuider.group(
        {
          password: ['', Validators.required],
          confirmPassword: ['', Validators.required],
        },
        { validator: passwordMatcher }
      ),
      address: this.formBuider.array([]),
    });
  }

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
  get firstName() {
    return this.userFrom.get('firstName');
  }
  get lastName() {
    return this.userFrom.get('lastName');
  }
  get email() {
    return this.userFrom.get('email');
  }
  setMessage(pass: AbstractControl): void {
    this.passwordMessage = '';
    if ((pass.touched || pass.dirty) && pass.errors) {
      this.passwordMessage = this.vaildationMassge.required;
      console.log(this.passwordMessage);
    }
  }

  get address(): FormArray {
    return this.userFrom.get('address') as FormArray;
  }

  newAddress(): FormGroup {
    return this.formBuider.group({
      city: '',
      street: '',
    });
  }
  addAddress() {
    this.address.push(this.newAddress());
  }
  removeAddress(item: number) {
    this.address.removeAt(item);
  }
}
