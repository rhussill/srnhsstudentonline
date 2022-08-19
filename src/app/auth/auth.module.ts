import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//module
import { BrowserModule } from '@angular/platform-browser';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { PdfViewerModule } from 'ng2-pdf-viewer';





//component
import { LoginComponent } from './login/login.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DialogboxComponent } from './dialogbox/dialogbox.component';



@NgModule({
  declarations: [
    LoginComponent,
    RecoveryComponent,
    ForgotPasswordComponent,
    DialogboxComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AuthRoutingModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    PdfViewerModule
  ]
})
export class AuthModule { }
