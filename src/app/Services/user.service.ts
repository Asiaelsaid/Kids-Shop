import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../Modules/i-user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http = {};
  constructor(private HttpClient: HttpClient) {
    this.http = {
      headers: new HttpHeaders({
        'Content-Type': 'appliction/json',
      }),
    };
  }
  signUpUser(newUser: IUser): Observable<IUser> {
    return this.HttpClient.post<IUser>(
      `${environment.APIURL}/users`,
      JSON.stringify(newUser),
      this.http
    );
  }
}
