import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm , FormControl , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';


@Component({
  selector: 'app-student-sign-in',
  templateUrl: './student-sign-in.component.html',
  styleUrls: ['./student-sign-in.component.css']
})
export class StudentSignInComponent implements OnInit {
  public signIn: FormGroup; 

  constructor(private router: Router,private authService:AuthServiceService , private fb: FormBuilder) { }

  ngOnInit(): void {
     this.signIn = this.fb.group({
      email: new FormControl(null,[Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4)])  
     })
  }
  get email()  
  {
     return this.signIn.get('email') ; 
  }
  get password()  
  {
     return this.signIn.get('password') ; 
  }
  signInEmployee()
  {
     console.log(this.signIn) ; 
  }

}
