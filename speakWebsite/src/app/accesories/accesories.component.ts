import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accesories',
  templateUrl: './accesories.component.html',
  styles: []
})
export class AccesoriesComponent implements OnInit {

  img: string = '../../assets/accesories.png';

  constructor() { }

  ngOnInit() {
    this.img = '../../assets/accesories.png';
  }

  setValue(){
    this.img = '../../assets/accesories.png';

  }

}
