import {  Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ DatePipe]
})
export class HeaderComponent implements OnInit {
  today = Date.now();

  
  @Output() menuClickedEvent = new EventEmitter<void>();

  constructor(private router:Router ) { }

  ngOnInit(): void {
  }

  menuClicked(){
    this.menuClickedEvent.emit();
  }
home(){
  this.router.navigate(['home'])

}
  login(){
    console.log('test')
  this.router.navigate(['login']);

  }
  signup(){
    this.router.navigate(['register'])
  }
 
}
