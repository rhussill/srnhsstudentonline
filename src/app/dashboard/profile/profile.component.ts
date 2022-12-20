import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  hasData: any
  form: any;
  editProfile: boolean = false;
  viewprofile: boolean = true
  lName: any;
  fName: any;
  email:any;

  constructor(private service: AppService, private router: Router) { }

  ngOnInit(): void {

    this.getProfile(this.form)
  }


  getProfile(form) {

    form = {
      "token": localStorage.getItem("Token")
    }
    this.service.postProfile(form).subscribe(data => {
      this.hasData = data;
      this.fName = data.fName;
      this.lName = data.lName;
      this.email = data.email
      console.log("tnaginamolunchna", data)
    })
  }


  editprofile() {
    this.editProfile = true;
    this.viewprofile = false
  }

  back() {
    this.editProfile = false;
    this.viewprofile = true;
  }

  login(form) {
    form = {
      "token": localStorage.getItem("Token"),
      "fName": this.fName,
      "lName": this.lName,
    }
    console.log(form)
    this.service.editProfile(form).subscribe(data => {
      this.hasData = data;
      console.log("tnaginamolunchna", data)
    })
  }




}
