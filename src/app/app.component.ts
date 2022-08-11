import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ldis';
 
  sideNavVisible:boolean = false;

  constructor(private appService : AppService){

  }
    
  ngOnInit(): void {

  }
   
  toggleSideNav(){
    this.sideNavVisible = !this.sideNavVisible;
  }
}
