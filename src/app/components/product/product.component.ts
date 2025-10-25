import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { ImgComponent } from "../img/img.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ImgComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  @Input() product: Product= {
    id: 0,
    name: '',
    price: 0,
    image: ''
  };
  @Output() addedProduct = new EventEmitter<Product>();

  constructor() {}

  ngOnInit(){}

  onAddToCart(){
    this.addedProduct.emit(this.product);
  }
}
