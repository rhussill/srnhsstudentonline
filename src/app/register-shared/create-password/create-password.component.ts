import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.css']
})
export class CreatePasswordComponent implements OnInit {

  hide=true;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(form:any){

  }
  home(){
    this.router.navigate(['home'])
  }
  next(){
    this.router.navigate(['profile'])
  }
  

}
