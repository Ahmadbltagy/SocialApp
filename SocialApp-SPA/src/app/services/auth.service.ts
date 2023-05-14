import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'https://localhost:7231/api/auth/';
  constructor(private _http: HttpClient) {}

  login(model: any) {
    return this._http.post(`${this.baseUrl}login`, model).pipe(
      map((response: any) => {
        if (response) return localStorage.setItem('Token', response.token);
      })
    );
  }

  register(model: any) {
    return this._http.post(`${this.baseUrl}register`, model);
  }
}
