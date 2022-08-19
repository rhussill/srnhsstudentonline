import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//component
import { AppComponent } from './app.component';
import { HeaderComponent } from './body/header/header.component';
import { SidecardsComponent } from './body/sidecards/sidecards.component';

import { HomeComponent } from './home/home.component';



//Modules
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule} from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule} from '@angular/material/menu';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatChipsModule} from '@angular/material/chips';
import { MatTableModule} from '@angular/material/table';
import { MatSortModule} from '@angular/material/sort';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTabsModule} from '@angular/material/tabs';
import { MatSelectModule} from '@angular/material/select';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatDialogModule} from '@angular/material/dialog';
import { MatDividerModule} from '@angular/material/divider';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { AuthModule } from './auth/auth.module';






//routing
import { AuthRoutingModule } from './auth/auth-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { RegisterRoutingModule } from './register-shared/register-routing.module';
import { RegisterModuleModule } from './register-shared/register-module.module';
import {  RouterModule } from '@angular/router';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { AioncoComponent } from './user/aionco/aionco.component';
import { ApolloComponent } from './user/apollo/apollo.component';
import { ApolloRegistrationComponent } from './user/apollo-registration/apollo-registration.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidecardsComponent,
    HomeComponent,
    DashboardComponent,
    AioncoComponent,
    ApolloComponent,
    ApolloRegistrationComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatTabsModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    MatDividerModule,
    MatButtonModule,
    MatButtonToggleModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    RegisterModuleModule,
    AuthModule,
    MatCheckboxModule,
    MatRippleModule,
    MatIconModule,


    
    
    //routing
    AppRoutingModule,
    AuthRoutingModule,
    RouterModule,
    RegisterRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
