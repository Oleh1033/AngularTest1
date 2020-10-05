import { Component, OnInit } from '@angular/core';
import { User } from './user'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 
user: User;
constructor(private http: HttpClient){}

ngOnInit(){
  this.http.get('assets/user.json').subscribe((data:User) => this.user=data);
}
}
