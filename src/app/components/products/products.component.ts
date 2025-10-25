import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { Product } from '../../models/product.model';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ ProductComponent, NgForOf],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = [
    {
        id: 1,
        name: 'Automobil de juguete',
        price: 100,
        image: '/images/image1.webp'
    },
    {
        id: 2,
        name: 'Muñeca de trapo',
        price: 180,
        image: '/images/image2.webp'
    },
    {
        id: 3,
        name: 'Pelota de futbol',
        price: 120,
        image: '/images/image3.png'
    }
  ]

  constructor() {}

  ngOnInit(): void {}

  onAddToShoppingCart(product: Product){
    this.myShoppingCart.push(product);
    this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }
}
