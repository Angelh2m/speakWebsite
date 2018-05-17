import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beats-by-dre',
  templateUrl: './beats-by-dre.component.html',
  styles: []
})
export class BeatsByDreComponent implements OnInit {
  img: string = '../../assets/beats-by-dre.png';

  constructor() { }

  ngOnInit() {
  }

}
