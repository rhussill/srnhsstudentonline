import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-edit-training-provider',
  templateUrl: './edit-training-provider.component.html',
  styleUrls: ['./edit-training-provider.component.css']
})
export class EditTrainingProviderComponent implements OnInit {

  //tracker if the form is valid or not
  form_isValid:boolean = false;

  data:any;
  providerName:string = '';
  website:string = '';
  emailAdd :string = '';
  telNo :string = '';
  address :string = '';
  pointofContact :string ='';
  mobileNo:string='';
  tin: string ='';
  //payment_details :string = '';

  isLoading:boolean= false;

  constructor(
    private dialogRef: MatDialogRef<EditTrainingProviderComponent>,
    private appService : AppService,
    private router: Router,
    private dialog : MatDialog
    ) { }

  ngOnInit(): void {
    console.log(this.appService.id);
    //upon component load, we should fetch the details of the selected training provider
    if(this.appService.id == null || this.appService.id == undefined){
      console.log("hello");
      this.dialogRef.close();
      this.router.navigate(['library/training-provider']);
    }
    else{
      console.log('here');
      this.getData(this.appService.id);
    }
  }

  getData(id:number){
    this.isLoading = true;
    //get training provider details by ID
    this.appService.getTrainingProvider(id).subscribe(data=>{
      //this.data = data;

      console.log(data);
      this.providerName = data[1].providerName;
      this.website = data[1].website;
      this.telNo = data[1].telNo;
      this.emailAdd = data[1].emailAdd;
      //this.payment_details = data[0].payment;
      this.pointofContact = data[1].pointofContact;
      this.address = data[1].address;
      this.mobileNo = data[1].mobileNo;
      this.tin = data[1].TIN;

      this.isLoading = false;
    },err=>{
      console.log(err);
      this.isLoading = false;
    })
  }

  //handle form submission
  submit(form:any){
    console.log(form);

    //validate the form values
    //if form is valid, send http request
    if(this.validate(form)){
      this.form_isValid = true;
      this.appService.updateTrainingProvider(form).subscribe(data=>{
        this.dialog.open(DialogComponent,{
          data :{
            message : "Successfully updated training provider."
          }
        })
        this.dialogRef.close();
      },err=>{
        console.log(err);
      })
      console.log(true);
    }
    //else display an error message
    else{
      this.form_isValid = false;
      this.dialog.open(DialogComponent,{
        data : {
          message : "Invalid value. Please check your form and try again."
        }
      })
    }
    //call the submit api
  }


  //close this dialog when user clicks cancel
  cancelClicked(){
    this.dialogRef.close();
  }

  validate(form:any):boolean{
    if(
      form.providerName.match(/^[a-zA-Z ]{2,100}$/) &&
      form.website.match(/^[a-zA-Z. ]{2,100}$/) &&
      form.address.match(/^[0-9a-zA-Z., ]{2,100}$/) &&
      form.pointofContact.match(/^[a-zA-Z ]{2,100}$/) &&
      form.telNo.match(/^[0-9]{11}$/) &&
      form.emailAdd.match(/^[a-zA-Z0-9!@#$%^&]+@[a-z.]+.[a-z]{2,3}$/)
    ){
      return true;
    }
    return false;
  }
  
// && form.payment_details.match(/^[a-zA-Z ]{2,100}$/)
}
