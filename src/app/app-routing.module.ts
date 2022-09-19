import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AppCompomentComponent } from './dashboard/app-compoment/app-compoment.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

import { PatientComponent } from './dashboard/patient/patient.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { ResultComponent } from './dashboard/result/result.component';
import { ScienceComponent } from './dashboard/science/science.component';
import { SettingComponent } from './dashboard/setting/setting.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register-shared/register/register.component';
import { AioncoComponent } from './user/aionco/aionco.component';
import { ApolloRegistrationComponent } from './user/apollo-registration/apollo-registration.component';
import { ApolloComponent } from './user/apollo/apollo.component';
import { DashboardMainComponent } from './user/dashboard-main/dashboard-main.component';
import { DashboardTestComponent } from './user/dashboard-test/dashboard-test.component';
import { DashboardUserComponent } from './user/dashboard-user/dashboard-user.component';


const routes : Routes = [
  { path : '', redirectTo: '/home', pathMatch: 'full' },

  { path : 'home', component: HomeComponent },
  { path : 'register', component: RegisterComponent },
  // {path:'aionco',component:AioncoComponent},
  // {path:'dashboard',component:AioncoComponent},

  //test
 
  
    {path: 'sidenav', component: AppCompomentComponent ,children:[
      {path: 'dashboard', component: DashboardComponent},
      {path: 'patient', component: PatientComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'result', component: ResultComponent},
      {path: 'science', component: ScienceComponent},
      {path: 'settings', component: SettingComponent},
    ]},

    


  

 



  


  // {path: 'dashboardtest',component:DashboardTestComponent},
  // {path:'dashboard',component:DashboardComponent},
  {path:'dashboardmain',component:DashboardMainComponent,children:[
   
    {path:'apollo',component:ApolloComponent},
    {path:'apollo-registration',component:ApolloRegistrationComponent},
  ]}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
