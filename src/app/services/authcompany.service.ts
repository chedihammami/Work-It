import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import  {basePath} from  "../constants";
@Injectable({
  providedIn: 'root'
})
export class AuthcompanyService {

  // Injecting Angular's HTTP service
  constructor(private HttpClient:HttpClient) { }

  // logging in by an HTTP POST method
  login(credentials): Observable<any> {
    return this.HttpClient.post(`${basePath}/companies/login`, credentials )
   }

   // Check whether the user is authenticated or not
  isAuthentificated():boolean{
    return !!localStorage.getItem('token');
  }
}
