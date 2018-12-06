import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductBasketComponent } from './product/product.basket.component';
import { ProductSpecificationComponent } from './product/product.specification.component';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './service/product.service';
import { HomeComponent } from './home/home.component';
import { BasketComponent } from './basket/basket.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutUsComponent } from './about.us/about.us.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DataTableModule } from "angular-6-datatable";

@NgModule({
  declarations: [
    AppComponent,
    ProductBasketComponent,
    ProductSpecificationComponent,
    ProductsComponent,
    HomeComponent,
    BasketComponent,
    NavComponent,
    AboutUsComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,
    DataTableModule,
    NgbModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
