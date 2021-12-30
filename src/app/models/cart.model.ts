import { IProduct } from './product.model';
import { ICartDetails } from './cart-details.model';

export interface ICart {
  id: string;
  products: IProduct[];
  details: ICartDetails;
}
