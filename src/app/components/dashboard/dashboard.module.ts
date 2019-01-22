import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { dashboardRoutes } from './dashboard.routes';

// Components
import { LayoutComponent } from './layout/layout.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';

// Most used UI Components
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { NgScrollbarModule } from 'ngx-scrollbar';

// ServicesModule
import { AuthGuardService } from '../../services/guards/auth-guard.service';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes),
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    NgScrollbarModule
  ],
  declarations: [
    LayoutComponent,
    AdminComponent,
    HomeComponent,
    TodoComponent
  ],
  providers: [
    AuthGuardService
  ]
})
export class DashboardModule { }
