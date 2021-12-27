import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { basePath } from  '../constants' ;
@Injectable({
  providedIn: 'root'
})
export class SignUpServiceService {

  constructor(private HttpClient:HttpClient) { }

  // Sending HTTP request to the User Back-end API
  signUpUser(credentials: any): Observable<any> {
       return this.HttpClient.post(`${basePath}/users`, credentials);
    }
  // Sending HTTP request to the Student Back-end API
    signUpStudent(credentials: any): Observable<any> {
       return this.HttpClient.post(`${basePath}/students`, credentials);
    }
  // Sending HTTP request to the Employer Back-end API
    signUpEmployer(credentials: any): Observable<any> {
       return this.HttpClient.post(`${basePath}/employers`, credentials) ;
    }
  // Sending HTTP request to the Company Back-end API
    createCompany(credentials:any): Observable<any> {
        return this.HttpClient.post(`${basePath}/companies`, credentials) ;
    }

}
