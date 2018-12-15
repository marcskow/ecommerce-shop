import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/product/product.model';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css']
})
export class FactoryComponent implements OnInit {

  constructor(private productService: ProductService) { }

  model = new Product("", 0, "", 0, "")

  ngOnInit() {
  } 

  onSubmit() {
    this.productService.addProduct(this.model)
  }
}
