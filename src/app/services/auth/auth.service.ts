import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Observable, pipe, throwError} from 'rxjs';
import {map, tap} from 'rxjs/operators';

import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private message: string;

  constructor(private _router: Router, private _localStorage: LocalStorageService) { }

  /**
   * check for expiration and if token is still existing or not
   * @return {boolean}
   */
  isAuthenticated(): boolean {
    return this._localStorage.getToken() != null && !this.isTokenExpired();
  }

  // simulate jwt token is valid
  isTokenExpired(): boolean {
    return false;
  }

  /**
   * return the current stored token
   * @return {string}
   */
  getToken() {
    return this._localStorage.getToken();
  }
}
