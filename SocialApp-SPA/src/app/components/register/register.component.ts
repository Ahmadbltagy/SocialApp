import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  model = {
    username: '',
    password: '',
  };
  @Output() cancelRegister = new EventEmitter();

  constructor(
    private _authService: AuthService,
    private _alertifyService: AlertifyService
  ) {}

  register() {
    this._authService.register(this.model).subscribe({
      next: (res) => this._alertifyService.success('registered Successfully'),
      error: (err) => this._alertifyService.error('Error'),
    });
  }

  cancel() {
    this.cancelRegister.emit();
    console.log('Cancelled');
  }
}
