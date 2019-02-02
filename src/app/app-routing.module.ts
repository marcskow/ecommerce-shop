import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { BasketComponent } from './basket/basket.component';
import { AuthGuard } from './auth.guard';
import { AboutUsComponent } from './about.us/about.us.component';
import {LoginComponent} from './login/login.component';
import {OrdersComponent} from './orders/orders.component';
import {OrderComponent} from './order/order.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {EmployeeAuthGuard} from './employee.auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'orders',
    component: OrdersComponent,
    canActivate: [EmployeeAuthGuard]
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'basket',
    component: BasketComponent
  },
  {
    path: 'about',
    component: AboutUsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
