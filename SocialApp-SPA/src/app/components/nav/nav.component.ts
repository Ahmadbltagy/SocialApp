import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: {
    username: string;
    password: string;
  };
  constructor(private _authService: AuthService) {
    this.model = {
      username: '',
      password: '',
    };
  }
  ngOnInit() {}

  login() {
    this._authService.login(this.model).subscribe({
      next: (res) => console.log(`Successful login ${res}`),
      error: (err) => console.log(`Failed to login ${err}`),
    });
  }

  loggedIn() {
    const token = localStorage.getItem('Token');
    return !!token; //!! will return true if there is a token and false if not
  }
  logOut() {
    localStorage.removeItem('Token');
    console.log('logged Out');
  }
}
