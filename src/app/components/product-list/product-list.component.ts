import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ICart } from 'src/app/models/cart.model';
import { IProduct } from 'src/app/models/product.model';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Output() public addToCartClick: EventEmitter<IProduct> = new EventEmitter();

  productList: IProduct[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.productService.getProducts().subscribe((products) => {
      const cart = this.cartService.getCart();

      this.productList = this.productService.updateProductQuantity(
        cart.products,
        products
      );
    });
  }

  onAddToCart(product: IProduct): void {
    this.cartService.updateCartProducts(product);
  }
}
