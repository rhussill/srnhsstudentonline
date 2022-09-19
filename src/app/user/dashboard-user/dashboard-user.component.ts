import { Component, OnInit } from '@angular/core';
import { flush } from '@angular/core/testing';
import { flatMap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent implements OnInit {

  title = 'AngularMaterialGettingStarted';
  iconleft:boolean=true;
  iconright:boolean=false
  leftbttn=true;
  rightbttn=false

  isMenuOpen = true;
  contentMargin = 240;

  task: string[] = [
    'Clearning out my closet', 'Take out trash bins', 'Wash car', 'Tank up the motorcycles', 'Go for flight training'
  ]


  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  onToolbarMenuToggle() {
    console.log('On toolbar toggled', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;

    if(!this.isMenuOpen) {
      this.iconleft=false;
      this.iconright=true
      this.rightbttn=true
     
      this.contentMargin = 70;
    } else {
      
      this.rightbttn=false
      this.iconright=false
      this.iconleft=true
      
      this.contentMargin = 240;
    }
  }

  dashboard(){
    this.router.navigate(['dashboarduser/dashboard'])
  }

}
