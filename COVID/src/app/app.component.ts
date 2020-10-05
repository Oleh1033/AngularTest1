                                         //Object Observable. Get requst to users.json

/*import { HttpClient } from '@angular/common/http';                                       
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
} */



import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent{
   
  userName: string = "";
  response: any;

constructor(private http: HttpClient){}     


search(){
  this.http.get(' https://api.github.com/users/' + this.userName)
  .subscribe((response) => {
    this.response = response;
    console.log(this.response);
  })
}



}
