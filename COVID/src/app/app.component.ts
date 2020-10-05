import { Component, OnInit } from '@angular/core';
import { User } from './user'
import { HttpService } from './http.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HttpService]
})
export class AppComponent implements OnInit{
 
users: User[] = [];
constructor(private httpService: HttpService){}

ngOnInit(){
  this.httpService.getUsers().subscribe(data => this.users=data);
}
}
