import { Component, OnInit } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  menuIsVisible:boolean = false;
  leftSideIsVisible:boolean = false;

  @Output() dashboardEvent = new EventEmitter<void>();


  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  opensidenav(){
    this.leftSideIsVisible = !this.leftSideIsVisible;
  }
  logout(){
    this.router.navigate(['home'])
  }
  aionco(){
    this.router.navigate(['dashboard/aionco'])
    this.leftSideIsVisible = !this.leftSideIsVisible;
  }
  apollo(){
    this.router.navigate(['dashboard/apollo'])
    this.leftSideIsVisible = !this.leftSideIsVisible;

  }
  
  apolloregistration(){
    this.router.navigate(['dashboard/apollo-registration'])
    this.leftSideIsVisible = !this.leftSideIsVisible;

  }

}
