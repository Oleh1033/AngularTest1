import { Component, OnInit } from '@angular/core';
import { User } from './user'
import { HttpService } from './http.service'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HttpService]
})
export class AppComponent implements OnInit{
 
user: User;
constructor(private httpService: HttpService){}

ngOnInit(){
  this.httpService.getData().subscribe((data: User) => this.user=data)
}
}
