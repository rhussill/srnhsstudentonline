import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { DatePipe } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-adminedit',
  templateUrl: './admin-adminedit.component.html',
  styleUrls: ['./admin-adminedit.component.css'],
  providers: [DatePipe]
})
export class AdminAdmineditComponent implements OnInit {


  
  id=this.service._id
  email=this.service.email;
  fName= this.service.fname
  lName= this.service.lname
  password:any;
  pNumber=this.service.pnumber
  roles=this.service.role

  status=this.service.status;

  dateofbirth:any;
  date:any;


  role=[
    'Admin',
    'User'
  ]

  isstatus=[
    'Active',
    'Inactive'
  ]

  
 
  

  maxDate = new Date();
  pipe = new DatePipe('en-US');
  
 
  

  constructor( private service:AppService , private dialogref :MatDialogRef<AdminAdmineditComponent>) { }

  ngOnInit(): void {

    
    let dobs = this.service.dob!= null ? this.service.dob : '';
    this.date= dobs? new Date(dobs) : '';
  }


  submit(form:any){
    
    let dates = this.pipe.transform(form.date, 'yyyy/MM/dd'); //date format
    form.date = dates;
    this.service.editAdmin(form ,this.id).subscribe(data=>{
      console.log("edited",data)
      this.dialogref.close();

    })
  }

  cancel(){

    this.dialogref.close();
  }

}
