import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.css']
})
export class DashboardMainComponent implements OnInit {

  isOpen = false;
  iconright:boolean= true
  iconleft:boolean=false
 
 

  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  expand(){

    
      this.iconright=!this.iconright
      this.iconleft=!this.iconleft;
      this.isOpen = !this.isOpen;
  }
      dashboard(){
        this.router.navigate(['dashboardmain/apollo'])
      }
      logout(){
        this.router.navigate(['home'])
      }
    
  
}
