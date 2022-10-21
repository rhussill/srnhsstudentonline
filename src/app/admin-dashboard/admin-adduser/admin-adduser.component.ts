import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AppService } from 'src/app/app.service';
import { DialogboxComponent } from 'src/app/dialogbox/dialogbox.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-admin-adduser',
  templateUrl: './admin-adduser.component.html',
  styleUrls: ['./admin-adduser.component.css'],
  providers: [DatePipe]
})
export class AdminAdduserComponent implements OnInit {

  selectrole: any;
  email: any;
  fName: any;
  lName: any;
  password: any;
  pNumber: any;
  date: any;
  completed = "Active"

  form_isValid: boolean = false;

  disable_button = false;

  pipe = new DatePipe('en-US');
  maxDate = new Date();

  roles = [
    'Admin',
    'User'
  ]




  constructor(private dialogref: MatDialogRef<AdminAdduserComponent>, private service: AppService, private dialog: MatDialog) { }

  ngOnInit(): void {

  }
  submit(form: any) {

    let dates = this.pipe.transform(form.date, 'yyyy/MM/dd'); //date format
    form.date = dates;
    console.log("testst", form.date)
    form = {
      "roles": this.selectrole,
      "email": this.email,
      "fName": this.fName,
      "lName": this.lName,
      "pNumber": this.pNumber,
      "password": this.password,
      "date": form.date,
      "status": this.completed
    }
    console.log(form.roles)
    this.disable_button = true;
    console.log(form)
    if (this.validate(form)) {
      this.form_isValid = true;
      this.service.addUsers(form).subscribe(data => {
        console.log("kungpumasok")
        console.log("form", data)
        this.dialogref.close();
        this.dialog.open(DialogboxComponent, {
          data: {
            message: "Successfully Added"
          }
        })
      })
    } else {
      this.form_isValid = false;
      this.disable_button = false;
      console.log('false');
    }
  }

  validate(form: any): boolean {
    if (
      form.email.match(/^[a-zA-Z0-9!@#$%^&]+@[a-z.]+.[a-z]{2,3}$/) &&
      form.fName.match(/^[a-zA-Z ]+$/) &&
      form.lName.match(/^[a-zA-Z ]{2,100}$/) &&
      form.pNumber.match(/^[0-9]{10,12}$/) &&
      true
    ) {
      return true;
    }
    return false;
  }

  cancel() {

    this.dialogref.close();
  }
}




