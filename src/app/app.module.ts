import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { routes } from './app.routes';

// Modules
import { DashboardModule } from './components/dashboard/dashboard.module';

// Services
import { ServicesModule } from './services/index';

// Components
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LayoutComponent } from './components/dashboard/layout/layout.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { AdminComponent } from './components/dashboard/admin/admin.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    AppRoutingModule,
    ServicesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
