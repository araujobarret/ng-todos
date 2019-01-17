import { NgModule } from '@angular/core';

import { StorageServiceModule } from 'ngx-webstorage-service';

import { LocalStorageService } from './local-storage/local-storage.service';

@NgModule({
  imports: [
    StorageServiceModule
  ],
  providers: [
    LocalStorageService
  ]
})
export class ServicesModule { }
