import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {Observable, pipe, throwError} from 'rxjs';
import {map, tap} from 'rxjs/operators';

import { LocalStorageService } from '../local-storage/local-storage.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'x-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzQzYzJjYzc0NGZiNzAwMTdmNmNjODQiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTQ3OTQ0NjUzfQ.N2vOTkMjUv8l-XHgyysjrV3KYWb0sobdA_ph3ATcftc'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private message: string;

  constructor(private http: HttpClient, private _router: Router, private _localStorage: LocalStorageService) { }

  /**
   * check for expiration and if token is still existing or not
   * @return {boolean}
   */
  isAuthenticated(): Promise<any> {
    return new Promise(async (resolve) => {
      if (this._localStorage.getToken() === null) { resolve('did not pass'); }
      const ret = await this.isTokenExpired();
      resolve(ret);
    });
  }

  // simulate jwt token is valid
  isTokenExpired(): Promise<any> {
    return new Promise((resolve) => {
      this.http.get(
        'https://todos-araujobarret.herokuapp.com/users/me',
        httpOptions
      ).subscribe(
        (res: any) => {
          console.log('response', res);
          resolve(true);
        },
        (error) => {
          console.log('error', error);
          resolve(false);
        }
      );
    });
  }

  /**
   * return the current stored token
   * @return {string}
   */
  getToken() {
    return this._localStorage.getToken();
  }
}
