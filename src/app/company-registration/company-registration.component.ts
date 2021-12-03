import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup , Validators } from '@angular/forms';
import { CompanyService } from '../services/company.service';
import { User } from '../model/user' ; 
import { Company } from '../model/company' ; 
import { Employer } from '../model/employer' ; 
import { SignUpServiceService } from '../services/sign-up-service.service'; 
import swal from 'sweetalert2' ;

@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.css']
})
export class CompanyRegistrationComponent implements OnInit {
  public companySignUpForm : FormGroup ;
  private randomID: number; 
  private randomCompanyID: number;
  private user: User ; 
  private employer: Employer; 
  private company: Company; 
  // regex for validation inputs
  private ALPHA_PATTERN  : RegExp   = /^[a-z]*$/i ; 
  private NUMBER_PATTERN : RegExp = /^[0-9]*$/i ; 
  constructor(private router:Router,private CompanyService:CompanyService , private fb:FormBuilder , private http: SignUpServiceService ) { }

  ngOnInit(): void {
    // creating the form
     this.companySignUpForm = this.fb.group({
       name: new FormControl(null,[Validators.required, Validators.pattern(this.ALPHA_PATTERN)]) , 
       email: new FormControl(null,[Validators.required]) ,
       tel: new FormControl(null,[Validators.required, Validators.maxLength(8), Validators.maxLength(8),Validators.pattern(this.NUMBER_PATTERN)] ) , 
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
  get tel()  
  {
     return this.companySignUpForm.get('tel') ; 
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
  createUser()
    {
        return { 
         name: this.companySignUpForm.value.name, 
         email: this.companySignUpForm.value.email, 
         password: this.companySignUpForm.value.password, 
         tel: parseInt(this.companySignUpForm.value.tel), 
         gender: 'M'  ,
         role: 'employer'  
     };
    } 
   
   createCompany() 
   {
      this.randomCompanyID= parseInt(Math.floor(Math.random() * Date.now()).toString().substring(0,3)) ; 

       return  {
           name: this.companySignUpForm.value.name, 
           address: this.companySignUpForm.value.address,
           website: this.companySignUpForm.value.websiteName, 
           tel: parseInt(this.companySignUpForm.value.tel), 
           email: this.companySignUpForm.value.email
       }
   }
   createEmployer(userid:number,companyid:number) 
   {
       return {
           userId: userid, 
           companyId: companyid 
       }
   }
  signUpCompany()
  {
    this.user = this.createUser() ; 
    this.company = this.createCompany() ; 
   
    console.log(this.user);
    swal.fire({
      title: "Confirm You Informations !",
      confirmButtonText: "YES",
      showCancelButton: true,
      denyButtonText: 'NO',

     }).then( (result) => 
     
      {
         if ( result.isConfirmed )

        {  
            this.http.signUpUser(this.user).subscribe(data => 
            {
               this.http.createCompany(this.company).subscribe(data1 => 
                  {
                     this.employer = this.createEmployer(data.id,data1.id) ; 
                     this.http.signUpEmployer(this.employer).subscribe(data2 =>  {
                        swal.fire({
                           title: 'Employer registered Successfully , Proceed to Login',
                           confirmButtonText: "YES" ,
                           showCancelButton: true,
                           denyButtonText: 'No'
                        }).then( result =>
                           {
                             if (result.isConfirmed )
                              {
                                 location.replace("http://localhost:4200/signin/companysignin");
                              } 
                           })
                     } , err => 
                     {
                         swal.fire('', "An Error occured in Employer",'error');
                     })
                  }, err => 
                  {
                     swal.fire('', 'An Error occured in company', "error"); 
   
                  })        
            }, err => 
            {
             swal.fire('', 'An Error occured in User Registration', 'error') ;  
          })
         }
       }
     ); 
     
  }
}
