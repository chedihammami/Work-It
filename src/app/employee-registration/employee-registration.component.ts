import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup , FormControl, Validators, FormBuilder , ReactiveFormsModule } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { Student } from '../Models/student';
import { UserService } from '../services/user.service';
import { User } from '../Models/user';
import { requiredFileType } from '../validators/cv-validator'; 
import { requiredImageType } from '../validators/image-validator' ; 



@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {
  public signUpForm: FormGroup ;  
  student:Student=null;
  user:User=null;
  public file: File; 
  public image: File; 
  private ALPHA_PATTERN  : RegExp   = /^[a-z]*$/i ; 
  private NUMBER_PATTERN : RegExp = /^[0-9]*$/i ; 
  constructor(private router:Router, private StudentService:StudentService, private userService:UserService, private fb:FormBuilder) { }
  


  ngOnInit(): void {
        this.signUpForm = this.fb.group({
          username: new FormControl(null,[Validators.required, Validators.pattern(this.ALPHA_PATTERN)]) , 
          email: new FormControl(null,[Validators.required]) ,
          phone: new FormControl(null,[Validators.required, Validators.maxLength(8), Validators.maxLength(8),Validators.pattern(this.NUMBER_PATTERN)] ) , 
          address: new FormControl(null,[Validators.required ]),
          school: new FormControl(null, [Validators.required]), 
          birthDate: new FormControl(null, [Validators.required]), 
          gender: new FormControl(null,[Validators.required]),
          password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
          cv : new FormControl(null,[Validators.required]), 
          img: new FormControl(null, [Validators.required])
        })
  }
  get username()  
  {
     return this.signUpForm.get('username') ; 
  }
  get email()  
  {
     return this.signUpForm.get('email') ; 
  }
  get phone()  
  {
     return this.signUpForm.get('phone') ; 
  }
  get address()  
  {
     return this.signUpForm.get('address') ; 
  }
  get school()  
  {
     return this.signUpForm.get('school') ; 
  }
  get birthDate()  
  {
     return this.signUpForm.get('birthDate') ; 
  }
  get gender()  
  {
     return this.signUpForm.get('gender') ; 
  }
  get password()  
  {
     return this.signUpForm.get('password') ; 
  }
  get cv()  
  {
     return this.signUpForm.get('cv') ; 
  }
  get img()  
  {
     return this.signUpForm.get('img') ; 
  }

  
  onFileChange( event: any) { 
    if(event.target.files && event.target.files.length) {
      this.file = event.target.files[0];
      this.cv.setValidators(requiredFileType(this.file)) ;
      this.cv.updateValueAndValidity();
   
    }
  }



    onImageChange(event:any)
    {
      if(event.target.files && event.target.files.length) {
        this.image = event.target.files[0];
        this.img.setValidators(requiredImageType(this.image)) ;
        this.img.updateValueAndValidity();
    }
  }
    signIn() 
    {
       console.log(this.signUpForm) ; 
    }

   


}


