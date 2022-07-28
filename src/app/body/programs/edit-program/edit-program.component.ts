import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

interface TrainingProviderOption {
  provID : number,
  providerName : string
}

@Component({
  selector: 'app-edit-program',
  templateUrl: './edit-program.component.html',
  styleUrls: ['./edit-program.component.css']
})


export class EditProgramComponent implements OnInit {

  form_isValid:boolean = false;

  data : any ;

  training_providers : TrainingProviderOption[] = [];

  program_name = '';
  program_description = '';
  program_provider:any = '';
  program_cost = '';

  constructor( private dialogRef : MatDialogRef<EditProgramComponent>,
    private appService : AppService,
    private router : Router,
    private dialog : MatDialog
    ) { }

  ngOnInit(): void {
    this.getTrainingProviders();
    this.getProgram();
  }

  getTrainingProviders(){
    this.appService.getDropDownTrainingProviders().subscribe(data=>{
      this.training_providers = data;
    },err=>{
      console.log(err);
    })
  }

  getProgram(){
    this.appService.getProgram(this.appService.progID).subscribe(data=>{
      this.data = data;

      this.program_name = data.programName;
      this.program_description = data.description;
      this.program_cost = data.cost;
      this.program_provider = data.provID;
    },err=>{
      console.log(err)
    })
  }

  submit(form:any){
    console.log(form);
    if(this.validate(form)){
      this.form_isValid = true;
      this.appService.updateProgram(form).subscribe(data =>{
        this.dialog.open(DialogComponent,{
          data : {
            message : "Successfully added training provider."
          }
        })
        this.dialogRef.close();
        this.router.navigate(['/programs']);
      },err=>{
        console.log(err);
      })
    }else{
      this.form_isValid = false;
      console.log(false);
    }
    //call the submit api
  }

  cancelClicked(){
    this.dialogRef.close();
  }

  validate(form:any):boolean{
    if(
      form.programName.match(/^[a-zA-Z ]{2,100}$/) &&
      form.description.match(/^[a-zA-Z ]{2,100}$/) &&
      form.providerID.toString().match(/^[0-9]{1,100}$/) &&
      form.cost.match(/^[0-9]{1,100}$/) 
    ){
      return true;
    }
    return false;
  }

}
