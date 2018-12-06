import { Component, OnInit, Input } from '@angular/core';
import { Product } from './product.model';
import { BasketService } from '../service/basket.service';

@Component({
  selector: 'app-product-specification',
  templateUrl: './product.specification.component.html'
})
export class ProductSpecificationComponent implements OnInit {

  @Input() product : Product;

  constructor() {}

  ngOnInit() { }
}
