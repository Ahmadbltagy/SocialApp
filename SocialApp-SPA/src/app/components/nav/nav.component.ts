import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  model: {
    username: string;
    password: string;
  };
  userName = '';

  constructor(
    private _authService: AuthService,
    private _alertifyService: AlertifyService
  ) {
    this.model = {
      username: '',
      password: '',
    };
  }

  login() {
    this._authService.login(this.model).subscribe({
      next: (res) => {
        this._alertifyService.success(`Login successfully`);
        this.userName = this._authService.decodedToken?.unique_name;
      },
      error: (err) => this._alertifyService.error(`Failed to login`),
    });
  }

  loggedIn() {
    return this._authService.loggedIn();
  }

  logOut() {
    localStorage.removeItem('Token');
    this._alertifyService.message('logged Out');
  }
}
