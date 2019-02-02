import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from 'src/app/product/product.model';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css']
})
export class FactoryComponent implements OnInit {

  @Output() addProduct = new EventEmitter<Product>();

  constructor() {
  }

  model = new Product('', 0, '', 0, '', '', 0, false, '', false, 0, 0);

  ngOnInit() {
  }

  onSubmit() {
    this.addProduct.emit(this.model);
  }
}
