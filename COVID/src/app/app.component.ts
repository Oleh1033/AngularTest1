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
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HttpService]
})
export class AppComponent{
   
  userName: string = "";
  response: any;
  id: number;
  book: any;
  title: string;

constructor(private httpService: HttpService){}     

search1(){
  this.httpService.search(this.userName).subscribe((data:any) => {
    this.response = data;
    console.log(this.response);
  })
}


 getBook1(){
  this.httpService.getBook(this.id).subscribe((data: any) => {
    this.book = data;
    console.log(this.book);
  })
} 

createBook1(){
  this.httpService.createBook(this.title).subscribe((data: any) => {
    this.book = data;
    console.log(this.book);
  })
}



}
