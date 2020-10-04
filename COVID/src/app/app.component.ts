import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService]
})
export class AppComponent implements OnInit {

  name: string;
  items: string[] = [];

  constructor(private dataService: DataService){}

  addItem(name){
    this.dataService.addData(name);
  }

  ngOnInit(){
    this.items = this.dataService.getData();

  }


}
