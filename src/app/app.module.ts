import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductBasketComponent } from './product/product.basket.component';
import { ProductSpecificationComponent } from './product/product.specification.component';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './service/product.service';
import { AdminComponent } from './admin/admin.component';
import { AdminProductComponent } from './admin/product/admin.product.component';
import { AdminProductsComponent } from './admin/products/admin.products.component';
import { HomeComponent } from './home/home.component';
import { BasketComponent } from './basket/basket.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutUsComponent } from './about.us/about.us.component';
import { FactoryComponent } from './admin/factory/factory.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent} from './orders/details/order.details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductBasketComponent,
    ProductSpecificationComponent,
    ProductsComponent,
    AdminComponent,
    AdminProductComponent,
    AdminProductsComponent,
    HomeComponent,
    BasketComponent,
    NavComponent,
    AboutUsComponent,
    FactoryComponent,
    LoginComponent,
    OrderComponent,
    OrdersComponent,
    OrderDetailsComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
