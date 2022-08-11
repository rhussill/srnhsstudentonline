import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  home(){
    this.router.navigate(['home'])

  }
  logins(form:any){
    
  }
  createacc(){
    this.router.navigate(['thankyou'])
  }
  log(){
    this.router.navigate(['login'])
  }

}
