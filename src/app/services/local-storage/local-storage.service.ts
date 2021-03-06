import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

// key that is used to access the data in local storage
export const TODO_SERVICE_STORAGE ='TODO_SERVICE_STORAGE';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  setToken (token) {
    try {
      this.storage.set(TODO_SERVICE_STORAGE, token);
      return true;
    } catch (e) {
      return new Error('Error storing the token');
    }
  }

  getToken () {
    return this.storage.get(TODO_SERVICE_STORAGE);
  }

  deleteToken () {
    console.log('token deleted');
    this.storage.set(TODO_SERVICE_STORAGE, undefined);
  }
}
