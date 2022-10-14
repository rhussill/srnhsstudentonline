import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AppService } from 'src/app/app.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-admin-edituser',
  templateUrl: './admin-edituser.component.html',
  styleUrls: ['./admin-edituser.component.css'],
  providers: [DatePipe]
})
export class AdminEdituserComponent implements OnInit {


 

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
  
 
  
 

  constructor( private dialogref :MatDialogRef<AdminEdituserComponent> ,private service:AppService) { }

  ngOnInit(): void {
    

    let dobs = this.service.dob!= null ? this.service.dob : '';
    this.date= dobs? new Date(dobs) : '';
  }

  submit(form:any){
    
    let dates = this.pipe.transform(form.date, 'yyyy/MM/dd'); //date format
    form.date = dates;
    this.service.editUser(form ,this.id).subscribe(data=>{
      console.log("edited",data)
      this.dialogref.close();

    })
  }

  
  cancel(){

    this.dialogref.close();
  }




}
