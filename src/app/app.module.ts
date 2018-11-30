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

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    AdminComponent,
    AdminProductComponent,
    AdminProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
