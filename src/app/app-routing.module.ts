import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register-shared/register/register.component';
import { AioncoComponent } from './user/aionco/aionco.component';
import { ApolloRegistrationComponent } from './user/apollo-registration/apollo-registration.component';
import { ApolloComponent } from './user/apollo/apollo.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';

const routes : Routes = [
  { path : '', redirectTo: '/home', pathMatch: 'full' },

  { path : 'home', component: HomeComponent },
  { path : 'register', component: RegisterComponent },
  {path:'aionco',component:AioncoComponent},

  {path:'dashboard',component:DashboardComponent , children:[
    {path:'aionco',component:AioncoComponent},
    {path:'apollo',component:ApolloComponent},
    {path:'apollo-registration',component:ApolloRegistrationComponent},
  ]}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes,{ scrollPositionRestoration : 'enabled'})
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
