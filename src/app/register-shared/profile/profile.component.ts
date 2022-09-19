import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [DatePipe]
})
export class ProfileComponent implements OnInit {


  maxDate = new Date();
  constructor(private router:Router , private service:AppService) { }

  //user
  firstname:any;
  lastname:any;
  phonenumber:any;
  date = new FormControl(new Date());
  dateofbirth:any;
  pipe = new DatePipe('en-US');

  ngOnInit(): void {
  }

  login(form:any){
   
    let dobformat = this.pipe.transform(form.dateofbirth, 'MM/dd/yyyy'); //date format
    let dateofbirth = this.pipe.transform(form.dateofbirth, 'MM/dd/yyyy'); //date format
    form.dateofbirth = dobformat;
    form.dateofbirth = dateofbirth;
    form={
      "fName":form.firstname,
      "lName":form.lastname,
      "pNumber":form.phonenumber,
      "date":form.dateofbirth
    }

    if(this.firstname==null || this.lastname==null || this.phonenumber == null){

      alert("please fill out the form")

    }else{

    this.service.createprofile(form,localStorage.getItem('_id')).subscribe(data=>{
      console.log(data)
      alert("successfully register")
      this.router.navigate(['home']);
    })
  }

  }
  save(){
    
  }
  home(){
    this.router.navigate(['home'])
  }

}
