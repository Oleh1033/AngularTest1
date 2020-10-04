
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators"; 

@Injectable()
export class UsersService {
constructor(private http: HttpClient){}

getUsers(){
    return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb')
}

   users = [
        {name: 'Lili1'},
        {name: 'Lili2'},
        {name: 'Lili3'},
        {name: 'Lili4'},
        {name: 'Lili5'},
      ] 
}