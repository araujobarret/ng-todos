import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, pipe, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { LocalStorageService } from '../local-storage/local-storage.service';
import { USERS_LOGIN, USERS_ME } from '../../constants/api';

let httpOptions = { headers: null };
httpOptions.headers = new HttpHeaders();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private _router: Router,
    private _localStorage: LocalStorageService
  ) { }

  /**
   * check for expiration and if token is still existing or not
   * @return {Promise<boolean>}
   */
  isAuthenticated(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      console.log('localStorage', this._localStorage);
      const token = this._localStorage.getToken();
      console.log('token', token);
      if (token === null) { resolve('did not pass'); }
      const ret = await this.isTokenExpired(token);
      console.log('ret', ret);
      if (ret) { return resolve(ret); }
      // delete the invalid token and reject
      this._localStorage.deleteToken();
      return reject(ret);
    });
  }

  // simulate jwt token is valid
  isTokenExpired(token): Promise<any> {
    // let headers = new HttpHeaders()
    // headers = headers.append('Content-Type', 'application/json')
    // headers = headers.append('x-auth', token);
    const opts = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-auth': token
      })
    }
    console.log('options', opts);
    return new Promise((resolve) => {
      this.http.get(
        USERS_ME,
        opts
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

  authenticate({ email, password}): Promise<any> {
    httpOptions['responseType'] = 'text';
    return new Promise((resolve) => {
      this.http.post(
        USERS_LOGIN,
        { email, password },
        httpOptions
      ).subscribe(
        (res: any) => {
          this._localStorage.setToken(res);
          console.log('response', res);
          console.log('token stored', this._localStorage.getToken());
          console.log('localStorage', this._localStorage);
          resolve({ success: true, token: res });
        },
        (error) => {
          console.log('error', error);
          resolve({ sucess: false });
        }
      );
    });
  }
}
