import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import  {basePath} from  "../constants";

// authentication service for the login and managing tokens

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  // using the HTTP service
  constructor(private HttpClient:HttpClient) { }

  // sending HTTP POST request to the back-end server
  login(credentials :any): Observable<any> {
   return this.HttpClient.post(`${basePath}/users/login`, credentials );
  }

  // A function to check whether the user is already authenticated or not
 isAuthentificated():boolean{
   return !!localStorage.getItem('access-token');
 }

 // storing the access  token in the local storage of the browser
 authentificate(token: string , role: string) {
    localStorage.setItem('access-token',token);
    localStorage.setItem('role',role);
 }
}
