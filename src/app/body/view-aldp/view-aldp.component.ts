import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-aldp',
  templateUrl: './view-aldp.component.html',
  styleUrls: ['./view-aldp.component.css']
})
export class ViewALDPComponent implements OnInit {

  source = [
    { 
      no:1,
      description:'desc',
      type:'Internal',
      no_of_program:5,
      estimated_cost:1000,
      participants_office_div:50,
      possible_provider:'Sitesphil',
      tentative_schedule:'Aug 1,2022'  
    }
  ];

  dataSource = new MatTableDataSource(this.source);
  headers: string[] = [
    'no',
    'description',
    'type',
    'no_of_program',
    'no_of_pax',
    'estimated_cost',
    'participants_office_div',
    'possible_provider',
    'tentative_schedule'
  ]; 
  subHeaders: string[] = ['per_session','total_pax'];
  displayedData :string[] = [
    'no',
    'description',
    'type',
    'no_of_program',
    'per_session',
    'total_pax',
    'estimated_cost',
    'participants_office_div',
    'possible_provider',
    'tentative_schedule'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
