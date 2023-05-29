import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private _authService: AuthService,
    private _alertify: AlertifyService,
    private _router: Router
  ) {}

  canActivate(): boolean {
    if (this._authService.loggedIn()) return true;
    this._alertify.error('You shall not pass!!');
    this._router.navigate(['/home']);
    return false;
  }
}
