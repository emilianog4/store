import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product [] = [
    new Product(1, 'GTA', 'lorem ipsum', 24.77, 'https://m.media-amazon.com/images/I/81MACEI0pzL._SL1500_.jpg'),
    new Product(2, 'Skyrim', 'lorem ipsum', 23.21, 'https://m.media-amazon.com/images/I/81NE-TWKpFL._SL1500_.jpg'),
    new Product(3, 'Spider Man', 'lorem ipsum', 25.72, 'https://m.media-amazon.com/images/I/71LZm8RQ8LL._SL1361_.jpg'),
    new Product(4, 'Mortal Kombat', 'lorem ipsum', 19.35, 'https://m.media-amazon.com/images/I/81tT+eYQjuL._SL1500_.jpg'),
    new Product(5, 'Sekiro', 'lorem ipsum', 21.50, 'https://m.media-amazon.com/images/I/81DK-nYLmLL._SL1500_.jpg'),
    new Product(6, 'Resident Evil 3', 'lorem ipsum', 15.99, 'https://m.media-amazon.com/images/I/81MDN6aWyZL._SL1500_.jpg'),
    new Product(7, 'Far Cry 6', 'lorem ipsum', 24.15, 'https://m.media-amazon.com/images/I/81MACEI0pzL._SL1500_.jpg'),
    new Product(8, 'Minecraft', 'lorem ipsum', 10.00, 'https://m.media-amazon.com/images/I/81I3jA-+ykL._SL1500_.jpg'),
    new Product(9, 'FIFA 22', 'lorem ipsum', 19.99, 'https://m.media-amazon.com/images/I/61Kda+eUmlL._SL1000_.jpg'),
    new Product(10, 'Elden Ring', 'lorem ipsum', 29.40, 'https://m.media-amazon.com/images/I/81yuT9n7gkL._SL1500_.jpg')
  ];

  constructor() { }

  getProducts():Product[] {
    return this.products;
  }
  
}
