import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  name: string;
  speed: number;
  model: string;
  colors: Colors;
  options: string[];

  constructor() { }

  ngOnInit(): void {
    this.name = 'Audi';
    this.speed = 235;
    this.model = 'RS8';
    this.colors = {
      car: 'white',
      salon: 'black',
      wheels: 'silver'
    };
    this.options = ['ABS', 'Автопілот', 'Авто піркінг'];
  }

}

interface Colors {
  car: string;
  salon: string;
  wheels: string;
}
