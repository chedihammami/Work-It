import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup , Validators } from '@angular/forms';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.css']
})
export class CompanyRegistrationComponent implements OnInit {
  public companySignUpForm : FormGroup ;
  // regex for validation inputs
  private ALPHA_PATTERN  : RegExp   = /^[a-z]*$/i ; 
  private NUMBER_PATTERN : RegExp = /^[0-9]*$/i ; 
  constructor(private router:Router,private CompanyService:CompanyService , private fb:FormBuilder) { }

  ngOnInit(): void {
    // creating the form
     this.companySignUpForm = this.fb.group({
       name: new FormControl(null,[Validators.required, Validators.pattern(this.ALPHA_PATTERN)]) , 
       email: new FormControl(null,[Validators.required]) ,
       phone: new FormControl(null,[Validators.required, Validators.maxLength(8), Validators.maxLength(8),Validators.pattern(this.NUMBER_PATTERN)] ) , 
       address: new FormControl(null,[Validators.required ]),
       websiteName: new FormControl(null,[Validators.required]), 
       password: new FormControl(null, [Validators.required, Validators.minLength(4)])
     })
  }

 // setting the getters 
  get name()  
  {
     return this.companySignUpForm.get('name') ; 
  }
  get email()  
  {
     return this.companySignUpForm.get('email') ; 
  }
  get phone()  
  {
     return this.companySignUpForm.get('phone') ; 
  }
  get address()  
  {
     return this.companySignUpForm.get('address') ; 
  }
  get websiteName()  
  {
     return this.companySignUpForm.get('websiteName') ; 
  }
  get password()  
  {
     return this.companySignUpForm.get('password') ; 
  }

  signUpCompany()
  {
     console.log(this.companySignUpForm); 
  }
}
