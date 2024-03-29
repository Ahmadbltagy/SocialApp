import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  jwtHelper = new JwtHelperService();
  constructor(private _authService: AuthService) {}
  ngOnInit(): void {
    const token = localStorage.getItem('Token');
    if (token)
      this._authService.decodedToken = this.jwtHelper.decodeToken(token);
  }
}
