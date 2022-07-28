import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

import { DashboardComponent } from './body/dashboard/dashboard.component';
import { CompetencyEditComponent } from './body/dataSource/competencyDataSource/competency-edit/competency-edit.component';
import { CompetencyViewComponent } from './body/dataSource/competencyDataSource/competency-view/competency-view.component';
import { competencyDataSourceComponent } from './body/dataSource/competencyDataSource/competencyDataSource.component';
import { LibraryComponent } from './body/library/library.component';
import { CreateTrainingProviderComponent } from './body/library/training-provider/create-training-provider/create-training-provider.component';
import { EditTrainingProviderComponent } from './body/library/training-provider/edit-training-provider/edit-training-provider.component';
import { TrainingProviderComponent } from './body/library/training-provider/training-provider.component';
import { ViewTrainingProviderComponent } from './body/library/training-provider/view-training-provider/view-training-provider.component';
import { CreateProgramComponent } from './body/programs/create-program/create-program.component';
import { EditProgramComponent } from './body/programs/edit-program/edit-program.component';
import { ViewAllProgramsComponent } from './body/programs/view-all-programs/view-all-programs.component';
import { ViewProgramComponent } from './body/programs/view-program/view-program.component';
import { ReportsComponent } from './body/reports/reports.component';
import { CreateSMEComponent } from './body/sme/create-sme/create-sme.component';
import { UpdateSMEComponent } from './body/sme/update-sme/update-sme.component';
import { ViewAllSMEComponent } from './body/sme/view-all-sme/view-all-sme.component';
import { ViewSMEComponent } from './body/sme/view-sme/view-sme.component';
import { ViewALDPComponent } from './body/view-aldp/view-aldp.component';

const routes : Routes = [
  { path : '', redirectTo: '/library', pathMatch: 'full' },

  //top-lelvel routes
  { path : 'dashboard', component : DashboardComponent},
  { path : 'datasource', children : [
    { path : 'competency', component : competencyDataSourceComponent},
    { path : 'competency/view', component: CompetencyViewComponent},
    { path: 'competency/edit', component: CompetencyEditComponent}
  ]},
  { path : 'reports', component : ReportsComponent },
  { path : 'library', component : LibraryComponent },
  { path : 'programs', component: ViewAllProgramsComponent },
  { path : 'sme', component : ViewAllSMEComponent },

  //auth route
  //{ path: 'auth', children : [
    { path : 'login', component: LoginComponent },
  //]},

  //Program Routes
  { path: 'programs/view', component : ViewProgramComponent },
  { path: 'programs/edit', component : EditProgramComponent },
  { path: 'programs/create', component : CreateProgramComponent },

  //ALDP Routes
  { path : 'aldp', component : ViewALDPComponent },

  //SME Routes
  { path: 'sme/view', component : ViewSMEComponent },
  { path: 'sme/edit', component : UpdateSMEComponent },
  { path: 'sme/create', component : CreateSMEComponent },

  //training provider routes
  { path : 'library/training-provider', component: TrainingProviderComponent},
  { path : 'library/training-provider/view', component: ViewTrainingProviderComponent}, 
  { path : 'library/training-provider/create', component: CreateTrainingProviderComponent},
  { path : 'library/training-provider/edit', component: EditTrainingProviderComponent},

  //wildcard route
  //{ path : '**', redirectTo: '/dashboard', pathMatch: 'full'}
];

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
