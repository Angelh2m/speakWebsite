import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iphone-x',
  templateUrl: './iphone-x.component.html',
  styles: []
})
export class IphoneXComponent implements OnInit {

  img: string = '../../assets/iphone-x.png';
  constructor() { }

  ngOnInit() {

    this.img = '../../assets/iphone-x.png';
  }

}
