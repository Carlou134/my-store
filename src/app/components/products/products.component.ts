import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { Product } from '../../models/product.model';
import { DatePipe, NgForOf, UpperCasePipe } from '@angular/common';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';
import { TimeAgoPipe } from '../../pipes/time-ago.pipe';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ ProductComponent, NgForOf, DatePipe, UpperCasePipe, TimeAgoPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = []
  today = new Date();
  date = new Date(2021, 1, 21);

  constructor(private storeService: StoreService, private productsService:ProductsService) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(data => {
      this.products = data
    })
  }

  onAddToShoppingCart(product: Product){
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }
}
