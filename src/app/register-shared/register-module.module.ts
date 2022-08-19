import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RegisterComponent } from './register/register.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { CreatePasswordComponent } from './create-password/create-password.component';

//module

import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';


//phone







@NgModule({
  declarations: [
    ProfileComponent,
    RegisterComponent,
    ThankYouComponent,
    CreatePasswordComponent,
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MatListModule,
    MatDatepickerModule,
    
  ]
})
export class RegisterModuleModule { }
