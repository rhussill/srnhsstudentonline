import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { FilterFormComponent } from '../filter-form/filter-form.component';

@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.css']
})
export class UploadDialogComponent implements OnInit {

  has_file:boolean=false;
  filename:string= '';
  isUploading:boolean= false;
  form:FormData = new FormData();
  validName:boolean = false;

  value:any = 0;
  seconds_remaining:any = 0;
  uploadform:boolean =true;
  Loadingform:boolean=false;
  filterform:boolean= false;


  constructor( private dialogref :MatDialogRef<UploadDialogComponent> , private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  uploadFile(evt){
    this.form = new FormData();
    this.form.append('file',evt[0]);
    console.log(evt);

    this.form.forEach(element => {
      console.log(1);
      console.log(element);
      if(element['name']!=undefined){
         if(element['name'].match(/[a-zA-Z]+\.[a-zA-Z0-9]{3,4}/) != null){
           this.validName = true;
           console.log('Hello');
           console.log(this.validName);
         }else{
          this.validName = false;
           console.log('Hi');
           console.log(this.validName);
           
         }
        this.filename = element['name'];
        console.log(this.filename);
        this.has_file = true;
      }else{
        console.log(2);
        this.filename = '';
        this.has_file = false;
      }
  });

  if(evt==null){
    this.value=0;
  }else {
    this.Loadingform=true;
    this.uploadform=false;
    this.seconds_remaining = 100;
    for (let i = 0; i < 100; i++) {
      window.setTimeout(() => (this.value += 1), i * 30); 
    }
    
    for (let i = 0; i < 100; i++) {
      window.setTimeout(() => {
        if(this.seconds_remaining == 1 ){
          this.dialogref.close();
         this.dialog.open(FilterFormComponent)
        }
        else{
          
          this.seconds_remaining -= 1
        }
      }
        , i * 30);
      console.log("eses",this.seconds_remaining)
      
    } 
    
  } 
  
  
 
  

  }

  remove(){

    this.has_file = false;
    this.validName = false;
    this.filename = '';

  }

  onFileSelected(event){

    this.uploadFile(event.target.files);
  }


  submit(){
    console.log('upload')

  }
  close(){
    this.dialogref.close()  
  }

}
