import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { ICartDetails } from '../models/cart-details.model';

import { ICart } from '../models/cart.model';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: ICart;

  constructor() {
    this.cart = {
      id: uuidv4(),
      products: [],
      details: {
        fullName: '',
        address: '',
        creditCardNumber: '',
      },
    };
  }

  getCart() {
    return this.cart;
  }

  getCartTotal() {
    return this.cart.products
      .reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.price * currentValue.quantity,
        0
      )
      .toFixed(2);
  }

  updateCartProducts(product: IProduct) {
    if (
      !this.cart.products.some(
        (currentProduct) => currentProduct.id === product.id
      )
    ) {
      this.cart.products.push(product);
    } else {
      this.cart.products = this.cart.products.map(
        (currentProduct: IProduct) => {
          if (currentProduct.id === product.id) {
            return {
              ...currentProduct,
              quantity: product.quantity,
            };
          }
          return currentProduct;
        }
      );
    }
    return this.cart;
  }

  updateCartDetails(details: ICartDetails) {
    this.cart.details = details;
    return this.cart;
  }

  clearCart() {
    this.cart.products = [];
    this.cart.details = {
      fullName: '',
      address: '',
      creditCardNumber: '',
    };
    return this.cart;
  }
}
