import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private _authService: AuthService, private _router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise((resolve, reject) => {
      this._authService.isAuthenticated()
        .then(res => {
          console.log('already authenticate', res);
          resolve(res)
        })
        .catch(e => {
          console.log('not authenticated', e);
          this._router.navigate(['/login']);
          reject(false);
        });
    });
  }

}
