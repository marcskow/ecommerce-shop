import { Component, OnInit, Input } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {

  @Input() product : Product

  constructor() {
  }

  ngOnInit() {
  }

}
