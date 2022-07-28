import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormArray, FormGroup, FormControl } from '@angular/forms';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
@Component({
  selector: 'app-compentency-data-source-form',
  templateUrl: './compentency-data-source-form.component.html',
  styleUrls: ['./compentency-data-source-form.component.css']
})
export class CompentencyDataSourceFormComponent implements OnInit {
  competencyDetails = this.fb.group({
    entries : this.fb.array([])
  });
  constructor(
    private dialogRef : MatDialogRef<CompentencyDataSourceFormComponent>,
    private appService : AppService,
    private router : Router,
    private fb : FormBuilder,
    private dialog : MatDialog) { }

  ngOnInit(): void {
  }
  get entries(){
    return this.competencyDetails.get('entries') as FormArray;
  }
  
  addEntries(){
    this.entries.push(
      this.fb.group({
        competencies : [''],
         lnd_needs: [''],
         employee_name: [''],
         exisiting_level_proficiency: [''],
         required_proficiency: [''],
         level_priority: [''],
         lnd_methodology: [''],
         performance_Indicator_Support: [''],
      })
      );
  }
}
