import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { RegisterComponent } from 'src/app/register-shared/register/register.component';
import { LoginComponent } from './login/login.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardUserComponent } from '../user/dashboard-user/dashboard-user.component';
import { CreatepasswordRecoveryComponent } from './createpassword-recovery/createpassword-recovery.component';
import { adminLoginComponent } from './login copy/login.component';



const routes: Routes = [
 
   { path : 'login' , component : LoginComponent },
   { path : 'adminlogin' , component : adminLoginComponent },
   
   {path: 'register',component:RegisterComponent},
   {path: 'recovery',component:RecoveryComponent},
   {path: 'forgotpass',component:ForgotPasswordComponent},
  //  {path: 'dashboard',component:DashboardComponent},
  //  {path: 'dashboard-user',component:DashboardUserComponent},
   {path: 'createpassrecovery',component:CreatepasswordRecoveryComponent}
]

@NgModule({
  imports: [
   RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AuthRoutingModule { }
