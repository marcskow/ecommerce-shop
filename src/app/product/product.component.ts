import { Component, OnInit, Input } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: [`
  img {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 150px;
    height: 150px;
  }
  `]
})
export class ProductComponent implements OnInit {

  @Input() product : Product

  constructor() {
  }

  ngOnInit() {
  }

}
