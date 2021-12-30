import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/product.model';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  id: string = '';
  private sub: any;
  product: IProduct | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.productService.getProducts().subscribe((products) => {
        const cart = this.cartService.getCart();

        const productList = this.productService.updateProductQuantity(
          cart.products,
          products
        );

        this.product = productList.find(
          (product) => product.id === +params['id']
        );
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onAddToCart(product: IProduct): void {
    this.cartService.updateCartProducts(product);
  }
}
