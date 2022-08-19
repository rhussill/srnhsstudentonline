import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.css']
})
export class CreatePasswordComponent implements OnInit {

  hide=true;
  password:any;
  confirmpass:any;

  constructor(private router:Router,private service:AppService) { }

  ngOnInit(): void {
    localStorage.getItem('_id')
  }

  login(form:any){
    // if(this.password==this.confirmpass){
    form={
      "password":form.confirmpass,
    }
    this.service.createpassword(form,localStorage.getItem('_id')).subscribe(data=>{
      if(data.result=='Failure'){

        alert(data.message)

      }else if(data.result=='Success' || this.password==this.confirmpass ){

        this.router.navigate(['profile'])

      }else{
        alert('password did not match')
      }
      console.log(data)
    })
   
    // else{
    //   alert('password did not match')
    // }

  }
  home(){
    this.router.navigate(['home'])
  }
  next(){
    
  }
  

}
