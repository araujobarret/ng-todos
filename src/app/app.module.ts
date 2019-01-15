import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StorageServiceModule } from 'ngx-webstorage-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LocalStorageService } from './services/local-storage.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StorageServiceModule
  ],
  providers: [
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
