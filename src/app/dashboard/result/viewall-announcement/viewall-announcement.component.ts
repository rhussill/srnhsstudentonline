import { Component, OnInit } from '@angular/core';
import { ViewAnnouncementComponent } from './view-announcement/view-announcement.component';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-viewall-announcement',
  templateUrl: './viewall-announcement.component.html',
  styleUrls: ['./viewall-announcement.component.css']
})
export class ViewallAnnouncementComponent implements OnInit {

 
  dataSource:any;
  role:boolean = true
  activityData :any ;
  
  


  StudentsdisplayedColumns: string[] = [
    'Name',
    'Grade',  
    'Section', 

  ];

  ActivitydisplayedColumns: string[] = [
    'Activity',
    'Detail',
    'Duration',  
  ];

  pageNo: number = 1;
  pageSize: number = 5;
  total: any;

  notif:any;
  constructor(private service : AppService , private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getMathAct();
    this.getallAnnouncement(this.pageNo)
   
  }

  getallAnnouncement(pageNo){

    this.service.getallannouncement(pageNo).subscribe(data=>{
      console.log(data.result)
      console.log(data.count)

      this.dataSource = data.result
      this.total = data.count
      this.notif = data.count
    })
 
  }


  getMathAct(){

    this.service.getsubject().subscribe(data=>{
      console.log(data.result[0])
       this.activityData = data.result
    })
  }

  rowclick(row){
    console.log(row)

    this.service.anounceData = row
    this.dialog.open(ViewAnnouncementComponent)
  
  }
 
  


  onPaginate(event:any){
    this.pageNo = event.pageIndex +1;
    this.pageSize = event.pageSize;
    console.log('onPaginate working!')
   this.getallAnnouncement(this.pageNo)
  }


  openAnnouncement(item:any){
    console.log(item)

    this.service.anounceData = item

    this.dialog.open(ViewAnnouncementComponent)

  }


}
