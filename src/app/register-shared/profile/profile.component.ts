import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  maxDate = new Date();
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(form:any){

  }
  save(){
    this.router.navigate(['home']);
  }
  home(){
    this.router.navigate(['home'])
  }

}
