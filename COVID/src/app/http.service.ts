import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
                                            //Object Observable. Get requst to users.json
/* @Injectable()
export class HttpService {
    constructor(private http: HttpClient){}

    getUsers() : Observable<User[]> {                            
     return this.http.get('assets/users.json').pipe(
         map(data => {
             let userList = data["usersList"];
             return userList.map(
                 function(user: any){
                     return {name: user.userName, age: user.userAge}
                 }
             )
         })
     )}
    } */



    @Injectable()
export class HttpService {

    constructor(private http: HttpClient){}

    search(userName: string) {
      return  this.http.get(' https://api.github.com/users/' + userName)
      }


     getBook(id: number){
        return this.http.get('https://fakerestapi.azurewebsites.net/api/Books/' + id);
    } 

    createBook(title: string){
        return this.http.post('https://fakerestapi.azurewebsites.net/api/Books', {
            title: title
        })
    }

    }

    
