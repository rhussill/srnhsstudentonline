import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

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


  constructor( private dialogref :MatDialogRef<UploadDialogComponent>) { }

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
