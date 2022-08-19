import { DatePipe } from '@angular/common';
import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [DatePipe],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  pdf:any;
  today = Date.now();
  email:any;
  password:any;

  constructor(private router:Router ,public service:AppService , private dialog:MatDialog) { }

  ngOnInit(): void {
    console.log('workimg');
  }
  home(){
    this.router.navigate(['home'])

  }
  login(form:any){
    form={
      "email":form.email,
      "password":form.password

    }
    this.service.login(form).subscribe(data=>{
      console.log(data)
      if(data.result=='Success'){
        alert(data.message)
       this.router.navigate(['dashboard'])
      }else if(data.result=='Failure'){
        alert(data.message)
      }
    })
   
  }
  signup(){
    this.router.navigate(['register'])
  }

  recovery(){

    this.router.navigate(['forgotpass'])

  }
  test(){
    this.service.getpdf().subscribe(data=>{
    
      console.log(this.pdf)
      
    })
  }

}
