import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from '@angular/common';

import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', loadChildren: './components/login/login.module#LoginModule', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
