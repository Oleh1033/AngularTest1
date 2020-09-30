import { Component, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { DataTransfer6Component } from './components/data-transfer6/data-transfer6.component';
/* import { DataTransfer6Component } from './components/data-transfer6.component' */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges {
 name: string = "Lili";
 name1: string = "Oleh";
 name2:string = "Tom";
 age: number = 24;
 clicks: number = 0;

 btnChanged(increased: any){
   if(increased == true){
    this.clicks++;
   } else if(this.clicks <= 0){
     return false;
   } else {
    this.clicks--;
   }
 }

 ngOnChanges(changes: SimpleChanges): void{
  for (let propName in changes) {
    let cng = changes[propName];
    let currentValue  = JSON.stringify(cng.currentValue);
    let prevValue = JSON.stringify(cng.previousValue);
    console.log(`${propName}: currentValue = ${currentValue}, previousValue = ${prevValue}`)
  }
 }

@ViewChild(DataTransfer6Component, {static: false})
private counterComponent: DataTransfer6Component;

increment(){ this.counterComponent.increment(); }
decrement(){ this.counterComponent.decrement(); }

}
