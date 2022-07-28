import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  gridView:boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  toggleViewG() {  
    this.gridView = true; 
}  
  toggleViewL(){
    this.gridView =false;
  }
  navigateToTrainingProvider(){
    this.router.navigate(['library/training-provider']);
  }
  navigateToSME(){
    this.router.navigate(['sme']);
  }
  navigateToALDP(){
    this.router.navigate(['aldp']);
  }
}