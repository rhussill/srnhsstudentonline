import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

import { FormBuilder,FormArray, FormGroup, FormControl } from '@angular/forms';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-create-training-provider',
  templateUrl: './create-training-provider.component.html',
  styleUrls: ['./create-training-provider.component.css']
})
export class CreateTrainingProviderComponent implements OnInit {

  form_isValid:boolean = false;
  paymentDetails = this.fb.group({
    entries : this.fb.array([])
  });

  constructor( 
    private dialogRef : MatDialogRef<CreateTrainingProviderComponent>,
    private appService : AppService,
    private router : Router,
    private fb : FormBuilder,
    private dialog : MatDialog
    ) { }

  ngOnInit(): void {
  }

  submit(form:any){
    console.log('clicked')
    let newForm = {training_provider_details:form,payment_details:this.paymentDetails.value};
    console.log(newForm);
    if(this.validate(form)){
      this.form_isValid = true;
      this.appService.createTrainingProvider(form).subscribe(data =>{
        this.dialog.open(DialogComponent,{
          data : {
            message : "Successfully added training provider."
          }
        })
        this.dialogRef.close();
        this.router.navigate(['/library/training-provider']);
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
      form.providerName.match(/^[a-zA-Z ]{2,100}$/) &&
      form.website.match(/^[a-zA-Z. ]{2,100}$/) &&
      form.address.match(/^[a-zA-Z ]{2,100}$/) &&
      form.pointofContact.match(/^[a-zA-Z ]{2,100}$/) &&
      form.telNo.match(/^[0-9]{11}$/) &&
      form.mobileNo.match(/^[0-9]{11}$/) &&
      form.emailAdd.match(/^[a-zA-Z0-9!@#$%^&]+@[a-z.]+.[a-z]{2,3}$/) &&
      form.TIN.match(/^[0-9]{12}$/)
    ){
      return true;
    }
    return false;
  }

  get entries(){
    return this.paymentDetails.get('entries') as FormArray;
  }

  addEntries(){
    this.entries.push(
      this.fb.group({
        account_number : [''],
        payee : ['']
      })
      );
  }

}
