import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() public product: IProduct | undefined;
  @Output() addToCartClick = new EventEmitter();

  counter = 0;

  constructor() {}

  ngOnInit(): void {
    this.counter = this.product?.quantity || 0;
  }

  public handleAddToCartClick(product: IProduct): void {
    this.addToCartClick.emit({ ...product, quantity: this.counter });
  }

  public increment(): void {
    this.counter++;
  }

  public decrement(): void {
    if (this.counter > 0) {
      this.counter--;
    } else {
      this.counter = 0;
    }
  }
}
