import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-transfer5',
  templateUrl: './data-transfer5.component.html',
  styleUrls: ['./data-transfer5.component.scss']
})
export class DataTransfer5Component implements OnInit {

  constructor() { }

counter: number = 0;

increment(){
  this.counter++;
}

decrement(){
  this.counter--;
}

  ngOnInit(): void {

  }

}
