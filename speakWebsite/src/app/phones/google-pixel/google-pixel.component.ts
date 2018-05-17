import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-pixel',
  templateUrl: './google-pixel.component.html',
  styles: []
})
export class GooglePixelComponent implements OnInit {

  img: string = '../../assets/pixel.png';
  constructor() { }

  ngOnInit() {
  }

}
