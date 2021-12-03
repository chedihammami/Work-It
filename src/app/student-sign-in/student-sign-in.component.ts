import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm , FormControl , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import swal from 'sweetalert2'

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
     swal.fire({
      title: 'Do you want to continue ?',
      confirmButtonText: 'YES',
      showCancelButton: true,
      denyButtonText: 'NO',

     }).then( (result) => 
     {
        if ( result.isConfirmed ) 
        {
           console.log(this.signIn.value);
          this.authService.login(this.signIn.value).subscribe( (response) => {
            this.authService.authentificate(response.access_token, 'employee'); 
            swal.fire('' , 'Logged in successfully  .' , 'success');
         }, err => 
            {
                swal.fire('','You are unauthorized', 'error');
            })
        }
     }) 
     
  }

}
