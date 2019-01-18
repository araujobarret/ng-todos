import { NgModule } from '@angular/core';

import { StorageServiceModule } from 'ngx-webstorage-service';

import { LocalStorageService } from './local-storage/local-storage.service';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './guards/auth-guard.service';

@NgModule({
  imports: [
    StorageServiceModule
  ],
  providers: [
    LocalStorageService,
    AuthService,
    AuthGuardService
  ]
})
export class ServicesModule { }
