import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() public product: IProduct | undefined;
  @Output() removeFromCartClick = new EventEmitter();

  counter = 0;

  constructor() {}

  ngOnInit(): void {}

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

  public handleRemoveFromCartClick(product: IProduct): void {
    alert('Cart has been updated!');
    this.removeFromCartClick.emit({ ...product, quantity: 0 });
  }
}
