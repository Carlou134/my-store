import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  imgParent = '';
  showImg = true;


  onLoaded(img: string){
    console.log("log padre" + img);
  }

  toggleImg(){
    this.showImg = !this.showImg;
  }
}
