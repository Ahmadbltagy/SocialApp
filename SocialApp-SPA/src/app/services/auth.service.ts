import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'https://localhost:7231/api/auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;

  constructor(private _http: HttpClient) {}

  login(model: any) {
    return this._http.post(`${this.baseUrl}login`, model).pipe(
      map((response: any) => {
        if (response) {
          localStorage.setItem('Token', response.token);
          this.decodedToken = this.jwtHelper.decodeToken(response.token);
        }
      })
    );
  }

  register(model: any) {
    return this._http.post(`${this.baseUrl}register`, model);
  }

  loggedIn() {
    const token = localStorage.getItem('Token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
