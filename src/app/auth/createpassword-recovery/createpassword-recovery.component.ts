import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-createpassword-recovery',
  templateUrl: './createpassword-recovery.component.html',
  styleUrls: ['./createpassword-recovery.component.css']
})
export class CreatepasswordRecoveryComponent implements OnInit {

  hide=true;
  password:any;
  confirmpass:any;

  constructor( private service:AppService , private router:Router) { }

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

        this.router.navigate(['login'])

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
