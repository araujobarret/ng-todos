import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { dashboardRoutes } from './dashboard.routes';

// Components
import { LayoutComponent } from './layout/layout.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';

// ServicesModule
import { AuthGuardService } from '../../services/guards/auth-guard.service';

@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoutes)
  ],
  declarations: [
    LayoutComponent,
    AdminComponent,
    HomeComponent
  ],
  providers: [
    AuthGuardService
  ]
})
export class DashboardModule { }
