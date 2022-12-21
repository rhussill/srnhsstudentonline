import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-grade-detail',
  templateUrl: './grade-detail.component.html',
  styleUrls: ['./grade-detail.component.css']
})
export class GradeDetailComponent implements OnInit {


  detail:any;
  constructor(private service:AppService) { }

  ngOnInit(): void {

    this.detail= this.service.userDetail
    console.log(this.detail)
  }
  
  

}