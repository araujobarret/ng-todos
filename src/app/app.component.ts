import { Component } from '@angular/core';

import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Todos with Angular';
  // dummy, let's consider if a token was found it is valid
  isAuthenticated: boolean

  constructor () {
    this.isAuthenticated = true ? true : false;
  }

}
