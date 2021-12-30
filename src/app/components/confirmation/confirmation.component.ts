import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICart } from 'src/app/models/cart.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  cart: ICart | undefined;

  fullName: string = '';
  total: string = '0.00';

  constructor(
    private readonly router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.cart = this.cartService.getCart();
    this.fullName = this.cart.details.fullName;
    this.total = this.cartService.getCartTotal();
  }

  handleBackToProductListClick() {
    this.cartService.clearCart();
    this.router.navigate(['/'], {
      queryParamsHandling: 'preserve',
    });
  }
}
