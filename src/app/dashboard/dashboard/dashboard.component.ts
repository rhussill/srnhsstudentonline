import { Component, OnInit ,Output ,EventEmitter } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import { defaultThrottleConfig } from 'rxjs/internal/operators/throttle';
import { UploadDialogComponent } from '../upload-dialog/upload-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from 'src/app/app.service';
import { UploadService } from 'src/app/upload-service/upload.service';
import AWSS3UploadAshClient from 'aws-s3-upload-ash'
import { environment } from 'src/environments/environment';
import { UploadResponse } from 'aws-s3-upload-ash/dist/types';



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


  hasData:any;

  file=[];
  edits:boolean=true;
  checks:boolean=false;
  allChecked :boolean =false
  displayedColumns: string[] = ['select', 'name', 'status', 'profile', 'timestamp'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  form:any

  sideNavVisible:boolean = false;
 

  imageObj: File;
  imageUrl: string;

  selectedFiles: FileList;
  @Output() menuClickedEvent = new EventEmitter<void>();

  constructor( private dialog:MatDialog , private service:AppService, private uploadService: UploadService) { }

  ngOnInit(): void {
    this.getProfile(this.form)
    console.log(this.getProfile(this.form))
    
  }


  upload() {
   
    const file = this.selectedFiles.item(0);
   // this.uploadService.uploadFile(file);
    }
    
    selectFile(event) {
    this.selectedFiles = event.target.files;
    }


  getProfile(form){

    form={
      "token":localStorage.getItem("Token")
    }
    this.service.postProfile(form).subscribe(data=>{
      this.hasData=data;
      console.log("tnaginamolunchna",data)
    })
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


  uploads(){
    
    this.dialog.open(UploadDialogComponent)
  }

  toggleSideNav(){
    this.sideNavVisible = !this.sideNavVisible;
    console.log("open")
    
  }


  
  ///upload
  onImagePicked(event: Event): void {
    const FILE = (event.target as HTMLInputElement).files[0];
    this.imageObj = FILE;
    console.log(this.imageObj)
  }

  onImageUpload() {
    // const imageForm = new FormData();
    const imageForm = new FormData();
    imageForm.append('image', this.imageObj);
    console.log("imgform",imageForm)
    this.uploadService.imageUpload(imageForm).subscribe(res => {
      console.log("testt",res)
      this.imageUrl = res['image'];
    });
  }


 
}
