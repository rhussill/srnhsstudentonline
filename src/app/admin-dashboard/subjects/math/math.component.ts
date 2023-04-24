import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AppService } from 'src/app/app.service';
import { UserDetailComponent } from 'src/app/dashboard/dashboard/user-detail/user-detail.component';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent implements OnInit {

  dataSource:any;
  role:boolean = true
  activityData :any = new MatTableDataSource
  name = localStorage.getItem('fName')


  StudentsdisplayedColumns: string[] = [
    'Name',
    'Grade',  
    'Section', 
    'Year',
    'Status',
  ];

  ActivitydisplayedColumns: string[] = [
    'Activity',
    'Detail',
    'Duration',  
  ];

  pageNo:number =1;
  pageSize:number=10;
  total:any;
  constructor(private service : AppService , private dialog :MatDialog) { }

  ngOnInit(): void {
    this.getMathAct();
   
  }


  getMathAct(){

    this.service.getsubject().subscribe(data=>{
      console.log(data.result[0])
       this.activityData = data.result
    })
  }

 
  


  onPaginate(event:any){
    this.pageNo = event.pageIndex +1;
    this.pageSize = event.pageSize;
    console.log('onPaginate working!')
   
  }


  rowclick(row){
    console.log(row)
    this.service.fileName = row.FileName
    this.service.userDetail = row;
    localStorage.setItem('filename',row.FileName)
    this.dialog.open(UserDetailComponent)
  }

}
