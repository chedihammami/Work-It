import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { basePath } from  '../constants' ; 
@Injectable({
  providedIn: 'root'
})
export class SignUpServiceService {

  constructor(private HttpClient:HttpClient) { }

    signUpUser(credentials: any): Observable<any> {
       return this.HttpClient.post(`${basePath}/users`, credentials); 
    }
    signUpStudent(credentials: any): Observable<any> {
       return this.HttpClient.post(`${basePath}/students`, credentials); 
    }
    signUpEmployer(credentials: any): Observable<any> {
       return this.HttpClient.post(`${basePath}/employers`, credentials) ; 
    }
    createCompany(credentials:any): Observable<any> {
        return this.HttpClient.post(`${basePath}/companies`, credentials) ;
    }

}
