import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  constructor(private router:Router ,private service:AppService) { }

  ngOnInit(): void {
  }

  navigateToMath(){

    this.router.navigate(['sidenav/math'])
    localStorage.setItem('sub','Math')

  }

  navigateToScience(){
    this.router.navigate(['sidenav/sciencesub'])
    localStorage.setItem('sub','Science')
    
  }
  navigateToEnglish(){
    this.router.navigate(['sidenav/english'])
    localStorage.setItem('sub','English')
  }
  navigateToAP(){
    this.router.navigate(['sidenav/ap'])
    localStorage.setItem('sub','Araling Panlipunan')
  }

}
