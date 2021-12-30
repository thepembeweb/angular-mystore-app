import { Injectable } from '@angular/core';
import { IProduct } from '../models/product.model';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _jsonURL = 'assets/data.json';

  constructor(private http: HttpClient) {}

  public getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this._jsonURL);
  }

  updateProductQuantity(cartProducts: IProduct[], currentProducts: IProduct[]) {
    if (cartProducts.length === 0) {
      return currentProducts.map((product) => {
        return {
          ...product,
          quantity: 0,
        };
      });
    }

    return currentProducts.map((currentProduct: IProduct) => {
      const cartProduct = cartProducts.find(
        (product) => product.id === currentProduct.id
      );

      if (cartProduct) {
        return {
          ...currentProduct,
          quantity: cartProduct.quantity,
        };
      }

      return currentProduct;
    });
  }
}
