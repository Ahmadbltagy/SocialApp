import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  constructor(private _authService: AuthService) {}

  register() {
    this._authService.register(this.model).subscribe({
      next: (res) => console.log('registered Successfully'),
      error: (err) => console.log('Error'),
    });
  }

  cancel() {
    this.cancelRegister.emit();
    console.log('Cancelled');
  }
}
