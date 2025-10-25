import { Component } from '@angular/core';
import { ImgComponent } from './components/img/img.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './components/product/product.component';
import { Product } from './models/product.model';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ImgComponent, FormsModule, ProductComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  imgParent = '';
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

  onLoaded(img: string){
    console.log("log padre" + img);
  }
}
