import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { ImgComponent } from "../img/img.component";
import { CurrencyPipe } from '@angular/common';
import { ReversePipe } from '../../pipes/reverse.pipe';
import { HighlightDirective } from "../../directives/highlight.directive";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ImgComponent, CurrencyPipe, ReversePipe, HighlightDirective],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product: Product= {
    id: 0,
    title: '',
    price: 0,
    image: '',
    description: '',
    category: ''
  };
  @Output() addedProduct = new EventEmitter<Product>();

  onAddToCart(){
    this.addedProduct.emit(this.product);
  }
}
