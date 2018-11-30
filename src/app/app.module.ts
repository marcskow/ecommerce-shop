import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
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

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    AdminComponent,
    AdminProductComponent,
    AdminProductsComponent,
    HomeComponent,
    BasketComponent,
    NavComponent,
    AboutUsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
