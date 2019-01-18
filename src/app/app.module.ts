import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { routes } from './app.routes';

// Modules
import { DashboardModule } from './components/dashboard/dashboard.module';

// Services
import { ServicesModule } from './services/index';
import { LoginModule } from './components/login/login.module';

// Components
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LayoutComponent } from './components/dashboard/layout/layout.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { AdminComponent } from './components/dashboard/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DashboardModule,
    LoginModule,
    AppRoutingModule,
    ServicesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
