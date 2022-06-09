import { Component, Input, OnInit } from '@angular/core';
import { CartItemModel } from 'src/app/models/cart-item-model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem!: CartItemModel;
  constructor() { }

  ngOnInit(): void {
  }

}
