import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input()
  product!: Product;

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  addToCart(): void {
    this.messageService.sendMessage(this.product);
  }

}
