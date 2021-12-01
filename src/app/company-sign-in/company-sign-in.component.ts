import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';


@Component({
  selector: 'app-company-sign-in',
  templateUrl: './company-sign-in.component.html',
  styleUrls: ['./company-sign-in.component.css']
})
export class CompanySignInComponent implements OnInit {
  public signInForm: FormGroup ;  
  constructor(private router: Router,private authService:AuthServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: new FormControl(null,[Validators.required]) ,
      password: new FormControl(null, [Validators.required, Validators.minLength(4)])
    })
  }
  get email()  
  {
     return this.signInForm.get('email') ; 
  }
  get password()  
  {
     return this.signInForm.get('password') ; 
  }
  signInCompany()
  {
     console.log(this.signInForm); 
  }

}