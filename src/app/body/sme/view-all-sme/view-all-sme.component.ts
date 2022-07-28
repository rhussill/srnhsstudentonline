import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from 'src/app/app.service';
import { CreateSMEComponent } from '../create-sme/create-sme.component';

@Component({
  selector: 'app-view-all-sme',
  templateUrl: './view-all-sme.component.html',
  styleUrls: ['./view-all-sme.component.css']
})
export class ViewAllSMEComponent implements OnInit {

  data = new MatTableDataSource([]);

  //data for paginator
  pageNo:number =1;
  pageSize:number=10;
  total:any;

  displayedColumns: string[] = ['name','source','company','expertise','email','number','status'];

  constructor(
    private router: Router,
    private dialog:MatDialog,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.getData(this.pageNo,this.pageSize);
  }
  
  rowClicked(id:number){
    this.appService.smeID = id;
    console.log(this.appService.smeID);
    this.router.navigate(['sme/view']);
  }

  addClicked(){
    this.dialog.open(CreateSMEComponent,{width:"40%",height:"40%"}).afterClosed().subscribe(data=>{
      //perform something after dialog close
      this.getData(this.pageNo,this.pageSize);
    })
  }

  //function to fetch all the training providers
  getData(pageNo:number,pageSize:number){
    //call the api to fecth all training providers
    this.appService.getAllSME().subscribe(data=>{
      this.data = new MatTableDataSource(data);
      
    },err => {
      console.log(err);
    })
  }


  onPaginate(event:any){
    this.pageNo = event.pageIndex +1;
    this.pageSize = event.pageSize;

    this.getData(this.pageNo,this.pageSize);
    console.log('onPaginate working!')
  }


}
