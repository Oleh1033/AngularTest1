import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-transfer6',
  templateUrl: './data-transfer6.component.html',
  styleUrls: ['./data-transfer6.component.scss']
})
export class DataTransfer6Component implements OnInit {

  constructor() { }

counter1: number = 0;

increment(){ this.counter1++; }
decrement(){ this.counter1--; }

  ngOnInit(): void {
  }

}
