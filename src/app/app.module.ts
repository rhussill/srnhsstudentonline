//Component
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { dataSourceComponent } from './body/dataSource/dataSource.component';
import { LibraryComponent } from './body/library/library.component';
import { SidecardsComponent } from './sidecards/sidecards.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { competencyDataSourceComponent} from './body/dataSource/competencyDataSource/competencyDataSource.component';
import { CompentencyDataSourceFormComponent } from './body/dataSource/competencyDataSource/compentency-data-source-form/compentency-data-source-form.component';
import { DashboardComponent } from './body/dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './auth/login/login.component';
//Modules
import { NgModule } from '@angular/core';
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

//Routes
import { AppRoutingModule } from './app-routing.module';
import { ReportsComponent } from './body/reports/reports.component';

//Training Provider Components
import { TrainingProviderComponent } from './body/library/training-provider/training-provider.component';
import { ViewTrainingProviderComponent } from './body/library/training-provider/view-training-provider/view-training-provider.component';
import { EditTrainingProviderComponent } from './body/library/training-provider/edit-training-provider/edit-training-provider.component';
import { CreateTrainingProviderComponent } from './body/library/training-provider/create-training-provider/create-training-provider.component';

//Dialog Components
import { DeleteDialogComponent } from './shared/delete-dialog/delete-dialog.component';
import { DialogComponent } from './shared/dialog/dialog.component';

//Program Components
import { ViewAllProgramsComponent } from './body/programs/view-all-programs/view-all-programs.component';
import { CreateProgramComponent } from './body/programs/create-program/create-program.component';
import { ViewProgramComponent } from './body/programs/view-program/view-program.component';
import { EditProgramComponent } from './body/programs/edit-program/edit-program.component';
import { ViewAllSMEComponent } from './body/sme/view-all-sme/view-all-sme.component';
import { CreateSMEComponent } from './body/sme/create-sme/create-sme.component';
import { UpdateSMEComponent } from './body/sme/update-sme/update-sme.component';
import { ViewSMEComponent } from './body/sme/view-sme/view-sme.component';
import { ViewALDPComponent } from './body/view-aldp/view-aldp.component';
import { CompetencyViewComponent } from './body/dataSource/competencyDataSource/competency-view/competency-view.component';
import { CompetencyEditComponent } from './body/dataSource/competencyDataSource/competency-edit/competency-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    dataSourceComponent,
    LibraryComponent,
    SidecardsComponent,
    SidenavComponent,
    competencyDataSourceComponent,
    CompentencyDataSourceFormComponent,
    DashboardComponent,
    NavbarComponent,
    ReportsComponent,
    TrainingProviderComponent,
    ViewTrainingProviderComponent,
    EditTrainingProviderComponent,
    CreateTrainingProviderComponent,
    DeleteDialogComponent,
    DialogComponent,
    ViewAllProgramsComponent,
    CreateProgramComponent,
    ViewProgramComponent,
    EditProgramComponent,
    ViewAllSMEComponent,
    CreateSMEComponent,
    UpdateSMEComponent,
    ViewSMEComponent,
    LoginComponent,
    ViewALDPComponent,
    CompetencyViewComponent,
    CompetencyEditComponent,
  ],
  imports: [
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
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
