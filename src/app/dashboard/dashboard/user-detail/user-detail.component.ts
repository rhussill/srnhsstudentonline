import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {


  detail:any;
  constructor(private service:AppService) { }

  ngOnInit(): void {

    this.detail= this.service.userDetail
    console.log(this.detail)
  }
  
  

}
