import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [DatePipe]
})
export class LoginComponent implements OnInit {
  today = Date.now();
  constructor() { }

  ngOnInit(): void {
    console.log('workimg');
  }

}
