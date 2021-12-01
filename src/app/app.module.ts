import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { CompanyRegistrationComponent } from './company-registration/company-registration.component';
import { CompanySignInComponent } from './company-sign-in/company-sign-in.component';
import { ContactComponent } from './contact/contact.component';
import { EmployeeNavbarComponent } from './employee-navbar/employee-navbar.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { StudentSignInComponent } from './student-sign-in/student-sign-in.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CompanyProfileComponent,
    CompanyRegistrationComponent,
    CompanySignInComponent,
    ContactComponent,
    EmployeeNavbarComponent,
    EmployeeRegistrationComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    ProfileComponent,
    RegistrationComponent,
    SignInComponent,
    StudentSignInComponent,
    TestimonialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
