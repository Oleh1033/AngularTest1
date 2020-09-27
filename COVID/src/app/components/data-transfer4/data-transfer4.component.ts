import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-data-transfer4',
  templateUrl: './data-transfer4.component.html',
  styleUrls: ['./data-transfer4.component.scss']
})
export class DataTransfer4Component implements OnInit, OnChanges {

@Input() nameChanged: string;

  constructor() { }

ngOnChanges(changes: SimpleChanges): void{
  for(let propName in changes) {
    let cng = changes[propName];
    let currentValue = JSON.stringify(cng.currentValue);
    let prevValue = JSON.stringify(cng.previousValue);
    console.log(`${propName}: currentValue = ${currentValue}, previousValue = ${prevValue}`)
  }
}

  ngOnInit(): void {
  }

}
