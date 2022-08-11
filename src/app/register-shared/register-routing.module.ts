import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { Routes, RouterModule } from '@angular/router';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { HomeComponent } from '../home/home.component';
import { CreatePasswordComponent } from './create-password/create-password.component';
import { LoginComponent } from '../auth/login/login.component';

const routes : Routes = [
  
  {path : 'login', component:LoginComponent},
  { path : 'register', component: RegisterComponent },
  {path : 'thankyou', component:ThankYouComponent},
  {path : 'home', component:HomeComponent},
  {path : 'profile', component:ProfileComponent},
  {path : 'create-pass', component:CreatePasswordComponent},
  

]


@NgModule({
  declarations: [],
  imports:
   [RouterModule.forChild(routes),
    CommonModule
  ]
})
export class RegisterRoutingModule { }
