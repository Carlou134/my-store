import { Component, OnInit, Input, output, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-img',
  standalone: true,
  imports: [ NgIf ],
  templateUrl: './img.component.html',
  styleUrl: './img.component.scss'
})
export class ImgComponent {
  @Input() img:string = "valor inicial";
  @Output() loaded = new EventEmitter<string>();

  imageDefault = 'default.png';

  ngOnInit(){

  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log('log hijo');
    this.loaded.emit("Imagen Cargada");
  }

}
