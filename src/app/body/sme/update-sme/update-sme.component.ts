import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
interface TrainingProviderOption {
  provID : number,
  providerName : string
}
@Component({
  selector: 'app-update-sme',
  templateUrl: './update-sme.component.html',
  styleUrls: ['./update-sme.component.css']
})

export class UpdateSMEComponent implements OnInit {

  form_isValid:boolean = false;

  training_providers : TrainingProviderOption[] = [];

  constructor( private dialogRef : MatDialogRef<UpdateSMEComponent>,
    private appService : AppService,
    private router : Router
    ) { }

  ngOnInit(): void {
   // this.getTrainingProviders();
  }

  getTrainingProviders(){
    this.appService.getDropDownTrainingProviders().subscribe(data=>{
      this.training_providers = data;
    },err=>{
      console.log(err);
    })
  }

  submit(form:any){
    console.log(form);
    if(this.validate(form)){
      this.form_isValid = true;
      this.appService.createSME(form).subscribe(data =>{
        alert("Successfully added training provider.");
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