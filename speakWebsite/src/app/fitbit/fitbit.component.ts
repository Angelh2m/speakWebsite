import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fitbit',
  templateUrl: './fitbit.component.html',
  styles: []
})
export class FitbitComponent implements OnInit {
  img: string = '../../assets/fitbit.png';
  constructor() { }

  ngOnInit() {
  }

}
