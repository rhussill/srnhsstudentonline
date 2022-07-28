import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {CompetencyEditComponent } from '../competency-edit/competency-edit.component';
import {MatDialog} from '@angular/material/dialog';

interface Competency {
  competency : string,
  lnd_needs: string,
  employee :string,
  level_of_proficiency: string,
  required_proficiency : string,
  priority : string,
  LND_methodology : string,
  performance_indicator : string
}

@Component({
  selector: 'app-competency-view',
  templateUrl: './competency-view.component.html',
  styleUrls: ['./competency-view.component.css']
})

export class CompetencyViewComponent implements   AfterViewInit {

  sample_data : Competency[] = [
    { 
      competency : "Technical",
      lnd_needs : "Training",
      employee : "Jhomar Custodio",
      level_of_proficiency : "medium",
      required_proficiency : "medium",
      priority : "high",
      LND_methodology : "IDK",
      performance_indicator : "Exam Score"
      
    }
  ];
  displayedColumns: string[] = ['competencies', 'lnd_needs', 'employee_name', 
  'exisiting_level_proficiency','required_proficiency','level_priority','lnd_methodology',
  'performance_Indicator_Support',];
  dataSource = new MatTableDataSource(this.sample_data);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(CompetencyEditComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


