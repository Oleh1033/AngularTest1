import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 name: string = "Lili";
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

}
