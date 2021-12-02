import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup , FormControl, Validators, FormBuilder , ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { requiredFileType } from '../validators/cv-validator'; 
import { requiredImageType } from '../validators/image-validator' ; 
import { User } from '../model/user'; 
import { Student } from '../model/student'; 
import { SignUpServiceService } from '../services/sign-up-service.service'; 
import swal from 'sweetalert2'; 
@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {
  public signUpForm: FormGroup ;  
  public student: Student ;
  public user: User ;
  public file: File; 
  public image: File; 
  public randomID: number; 
  private ALPHA_PATTERN  : RegExp   = /^[a-z]*$/i ; 
  private NUMBER_PATTERN : RegExp = /^[0-9]*$/i ; 
  constructor(private router:Router, private http:SignUpServiceService, private userService:UserService, private fb:FormBuilder) { }
  


  ngOnInit(): void {
        this.signUpForm = this.fb.group({
          name: new FormControl(null,[Validators.required, Validators.pattern(this.ALPHA_PATTERN)]) , 
          email: new FormControl(null,[Validators.required]) ,
          tel: new FormControl(null,[Validators.required, Validators.maxLength(8), Validators.maxLength(8),Validators.pattern(this.NUMBER_PATTERN)] ) , 
          location: new FormControl(null,[Validators.required ]),
          school: new FormControl(null, [Validators.required]), 
          linkedin: new FormControl(null, [Validators.required]), 
          education: new FormControl(null, [Validators.required]), 
          dateOfBirth: new FormControl(null, [Validators.required]), 
          driverLicense: new FormControl(null, [Validators.required]), 
          gender: new FormControl(null,[Validators.required]),
          password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
          cv : new FormControl(null,[Validators.required]), 
          img: new FormControl(null, [Validators.required]), 
          languages: new FormControl(false, [Validators.required]), 
        })
  }
  get name()  
  {
     return this.signUpForm.get('name') ; 
  }
  get email()  
  {
     return this.signUpForm.get('email') ; 
  }
  get languages()  
  {
     return this.signUpForm.get('languages') ; 
  }
  get tel()  
  {
     return this.signUpForm.get('tel') ; 
  }
  get location()  
  {
     return this.signUpForm.get('location') ; 
  }
  get school()  
  {
     return this.signUpForm.get('school') ; 
  }
  get dateOfBirth()  
  {
     return this.signUpForm.get('dateOfBirth') ; 
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
  get driverLicense()  
  {
     return this.signUpForm.get('driverLicense') ; 
  }
  get linkedin()  
  {
     return this.signUpForm.get('linkedin') ; 
  }
  get education()  
  {
     return this.signUpForm.get('education') ; 
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
    createUser()
    {
      this.randomID= Math.floor(Math.random() * Date.now()) ; 
        return { 
         id: this.randomID,
         name: this.signUpForm.value.name, 
         email: this.signUpForm.value.email, 
         password: this.signUpForm.value.password, 
         tel: this.signUpForm.value.tel, 
         role: 'student',
         gender: this.signUpForm.value.gender      
     }; 
   }
     createStudent()
     {
         return {
             userId: this.randomID, 
             dateOfBirth: this.signUpForm.value.dateOfBirth,
             driverLicense: this.signUpForm.value.driverLicense,
             education: this.signUpForm.value.education,
             school: this.signUpForm.value.school,
             languages: ['arabic', 'frensh', 'english'],
             linkedin: this.signUpForm.value.linkedin,
             location: this.signUpForm.value.location
         }
     }
    
    signIn() 
    {
   
      this.user = this.createUser(); 
      this.student = this.createStudent();
   
      swal.fire({
         title: "Confirm You Informations !",
         confirmButtonText: "YES",
         showCancelButton: true,
         denyButtonText: 'NO',
   
        }).then( (result) => 
        
         {
            if ( result.isConfirmed )

           {  
               this.http.signUpUser(JSON.stringify(this.user)).subscribe(data => 
               {
                  this.http.signUpStudent(JSON.stringify(this.student)).subscribe(data => 
                     {
                        swal.fire({
                           title: 'Student registered Successfully , Proceed to Login',
                           confirmButtonText: "YES" ,
                           showCancelButton: true,
                           denyButtonText: 'No'
                        }).then( result =>
                           {
                             if (result.isConfirmed )
                              {
                                 location.replace("http://localhost:4200/signin/studentsignin");
                              } 
                           })
                     }, err => 
                     {
                        swal.fire('', 'An Error occured', "error"); 
      
                     })        
               }, err => 
               {
                swal.fire('', 'An Error occured in User Registration', 'error') ;  
             })
            }
          }
        ); 
      console.log(this.user); 
      console.log(this.student); 
    }

   


}


