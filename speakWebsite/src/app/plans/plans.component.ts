import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styles: []
})
export class PlansComponent implements OnInit {
  img: string = '../../assets/plans.png';
  constructor() { }

  ngOnInit() {
  }

}
