import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-test',
  templateUrl: './dashboard-test.component.html',
  styleUrls: ['./dashboard-test.component.css']
})
export class DashboardTestComponent implements OnInit {

   isOpen = false;
  expand(){
    this.isOpen = !this.isOpen;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
