import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styles: []
})
export class DealsComponent implements OnInit {
  img: string = '../../assets/deals.png';
  constructor() { }

  ngOnInit() {
  }

}
