import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [
    new Product("Samsung Galaxy s8", 10, "Smartphone for everyone.", 2000, "https://www.jbhifi.com.au/FileLibrary/ProductResources/Images/210671-L-LO.jpg"),
    new Product("iPhone X", 15, "Ugly phone bleh.", 4000, "https://switch.com.my/wp-content/uploads/2017/11/iphonex_spacegray-600x600.png")
  ]

  constructor() {}

  ngOnInit() {
  }

}
