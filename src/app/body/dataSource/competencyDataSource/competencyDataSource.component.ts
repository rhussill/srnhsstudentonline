import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { CompentencyDataSourceFormComponent } from './compentency-data-source-form/compentency-data-source-form.component';
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
  selector: 'app-competencyDataSource',
  templateUrl: './competencyDataSource.component.html',
  styleUrls: ['./competencyDataSource.component.css']
})

export class competencyDataSourceComponent implements  AfterViewInit {

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

  displayedColumns: string[] = ['division', 'section', 'division_chief', 'date_submitted','FAD_AGSS_Personnel','date_approved','status',];
  dataSource = new MatTableDataSource(this.sample_data);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(CompentencyDataSourceFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


