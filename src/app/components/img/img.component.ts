import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-img',
  standalone: true,
  imports: [ NgIf ],
  templateUrl: './img.component.html',
  styleUrl: './img.component.scss'
})
export class ImgComponent implements OnInit {
  @Input() img:string = "valor inicial";
  @Output() loaded = new EventEmitter<string>();

  imageDefault = 'default.png';

  constructor() {}

  ngOnInit(){

  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log('log hijo');
    this.loaded.emit(this.img);
  }

}
