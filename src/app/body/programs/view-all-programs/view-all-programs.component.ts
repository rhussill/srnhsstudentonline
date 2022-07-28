import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from 'src/app/app.service';
import { CreateProgramComponent } from '../create-program/create-program.component';

@Component({
  selector: 'app-view-all-programs',
  templateUrl: './view-all-programs.component.html',
  styleUrls: ['./view-all-programs.component.css']
})
export class ViewAllProgramsComponent implements OnInit {

  data = new MatTableDataSource([]);

  //data for paginator
  pageNo:number =1;
  pageSize:number=10;
  total:any;

  displayedColumns: string[] = ['program_name','training_provider','rating','training_fee'];

  constructor(
    private router: Router,
    private dialog:MatDialog,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.getData(this.pageNo,this.pageSize);
  }
  
  rowClicked(id:number){
    this.appService.progID = id;
    console.log(this.appService.progID);
    this.router.navigate(['programs/view']);
  }

  addClicked(){
    this.dialog.open(CreateProgramComponent,{
      width: '50'
    }).afterClosed().subscribe(data=>{
      //perform something after dialog close
      this.getData(this.pageNo,this.pageSize);
    })
  }

  //function to fetch all the training providers
  getData(pageNo:number,pageSize:number){
    //call the api to fecth all training providers
    this.appService.getAllProgram().subscribe(data=>{
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
