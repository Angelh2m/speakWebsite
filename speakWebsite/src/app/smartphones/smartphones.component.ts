import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smartphones',
  templateUrl: './smartphones.component.html',
  styles: []
})
export class SmartphonesComponent implements OnInit {

  img = '../../assets/smartphones.png';


  constructor() { }

  ngOnInit() {
    this.img = '../../assets/smartphones.png';
  }

}
