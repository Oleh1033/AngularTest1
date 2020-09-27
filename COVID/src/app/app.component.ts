import { Component, OnChanges, SimpleChanges } from '@angular/core';

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

}
