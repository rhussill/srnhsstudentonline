import {  Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ DatePipe]
})
export class HeaderComponent implements OnInit {
  today = Date.now();
  
  @Output() menuClickedEvent = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  menuClicked(){
    this.menuClickedEvent.emit();
  }
}
