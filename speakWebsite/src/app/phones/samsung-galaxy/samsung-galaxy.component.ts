import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samsung-galaxy',
  templateUrl: './samsung-galaxy.component.html',
  styles: []
})
export class SamsungGalaxyComponent implements OnInit {
  img: string = '../../assets/galaxy.png';
  constructor() { }

  ngOnInit() {
  }

}
