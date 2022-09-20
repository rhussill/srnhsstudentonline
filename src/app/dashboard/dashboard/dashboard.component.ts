import { Component, OnInit ,Output ,EventEmitter } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import { defaultThrottleConfig } from 'rxjs/internal/operators/throttle';
import { UploadDialogComponent } from '../upload-dialog/upload-dialog.component';
import { MatDialog } from '@angular/material/dialog';
export interface PeriodicElement {
  id:number;
  name: any;
  status: any;
  profile: any;
  timestamp: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id:1 ,name: '4A_Normal_S3_L004', status: 'Incomplete', profile:'Normal', timestamp: 'H'},
  {id:2 ,name: '4A_Normal_S3_L0045', status: 'Incomplete', profile:'Normal', timestamp: 'H'},
 
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  file=[];
  edits:boolean=true;
  checks:boolean=false;
  allChecked :boolean =false
  displayedColumns: string[] = ['select', 'name', 'status', 'profile', 'timestamp'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  sideNavVisible:boolean = false;

  @Output() menuClickedEvent = new EventEmitter<void>();

  constructor( private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  checkAll(event:any){
    this.allChecked = !this.allChecked;

    if(this.allChecked==true){
      this.checks=true
      for(let item of this.dataSource.data){
        if(this.file.find((id)=>{return id==item.id})!=undefined){
          continue;
        }else{
          this.checks=true
          this.file.push(item.id);
          console.log(this.file);
          console.log('pushed');
        }
      }
    }else{
      this.checks=false
      this.file=[]
    }
  }

  check(element){

    console.log(element)
    console.log("arg",arguments[0])
    this.file.find((id)=>{console.log("iteration",id); return id == arguments[0].id})
    console.log("testfile",this.file.find((id)=>{console.log("iteration",id); return id == arguments[0].id}))
    this.checks=true
    if( this.file.find((id)=>{ return id == arguments[0]}) != undefined ){
      let index = this.file.indexOf(arguments[0]);
      this.checks=false
      this.file.splice(index,1);
      console.log(this.file,"gdhgdhgdghd");
      this.allChecked = false;
     
    
  }else{
    this.file.push(element)
    if(this.file.length==this.dataSource.data.length){
    this.allChecked = true;
  }
  console.log(this.file);
  }
  console.log(`allChecked: ${this.allChecked}`);
  console.log("datasource",this.dataSource.data.length)
  console.log("file",this.file)
  if(this.file.length > 1){
    console.log("editremoves")
    this.edits= false;
  }
  }

  exist(id){
    if(this.file.find((id)=>{ return id == arguments[0].id}) != undefined){
      console.log("Exist!");
    }
   return this.file.find((id)=>{ return id == arguments[0].id}) != undefined;

  }

  edit(file){

    console.log("idsss",file)
    
  }

  delete(file){
    console.log("delete",file)
  }


  upload(){
    this.dialog.open(UploadDialogComponent)
  }

  toggleSideNav(){
    this.sideNavVisible = !this.sideNavVisible;
    console.log("open")
    
  }
}
