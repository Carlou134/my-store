import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-img',
  standalone: true,
  imports: [ NgIf ],
  templateUrl: './img.component.html',
  styleUrl: './img.component.scss'
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: string = "";

  @Input('img')
  set ChangeImg(newImg: string){
    this.img = newImg;
    console.log("change just img => ", this.img );
  }

  @Input() alt:string = "";
  @Output() loaded = new EventEmitter<string>();
  //counter = 0;
  //counterFn: number | undefined;

  imageDefault = 'default.png';

  constructor() {
    // before render
    // NO async -- once time
    console.log("constructor", 'imgValue => ', this.img);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // before - during render
    // changes inputs -- times
    console.log("ngOnChanges", 'imgValue => ', this.img);
    console.log("Changes: ", changes);
  }

  ngOnInit(){
    // before render
    // async - fetch -- once time
    console.log("ngOnInit", 'imgValue => ', this.img);
    /*this.counterFn = window.setInterval(() => {
      this.counter += 1;
      console.log("run counter");
    }, 1000)*/
  }

  ngAfterViewInit(): void {
    //after render
    //handler children
    console.log("ngAfterViewInit");
  }

  ngOnDestroy(): void {
      // delete
      console.log("ngOnDestroy");
      /*window.clearInterval(this.counterFn);*/
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log('log hijo');
    this.loaded.emit(this.img);
  }

}
