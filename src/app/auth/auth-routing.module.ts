import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { RegisterComponent } from 'src/app/register-shared/register/register.component';
import { LoginComponent } from './login/login.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';



const routes: Routes = [
 
   { path : 'login' , component : LoginComponent },
   {path: 'register',component:RegisterComponent},
   {path: 'recovery',component:RecoveryComponent},
   {path: 'forgotpass',component:ForgotPasswordComponent}
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
