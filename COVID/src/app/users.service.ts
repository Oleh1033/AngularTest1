
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import 'rxjs/Rx'; 
 /* import { map } from 'rxjs/operators'; */



@Injectable()
export class UsersService {
constructor(private http: HttpClient){}

 getUsers(){
    return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb')
    .map(function(data){
      return data['results'];
    })
    .map(users => {
      return users.map(user => {
        return {
           name: user.name.first + ' ' + user.name.last,
           image: user.picture.large,
           geo: user.location.city + ' ' + user.location.state + ' ' + user.location.street.name + user.location.street.number
        }
      })
    })
    
  
} 

   users = [
        {name: 'Lili1'},
        {name: 'Lili2'},
        {name: 'Lili3'},
        {name: 'Lili4'},
        {name: 'Lili5'},
      ] 
}