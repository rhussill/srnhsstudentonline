import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from 'src/app/app.service';
import { FilterFormComponent } from '../filter-form/filter-form.component';

@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.css']
})
export class UploadDialogComponent implements OnInit {

  has_file: boolean = false;
  filename: string = '';
  isUploading: boolean = false;
  form: FormData = new FormData();
  validName: boolean = false;

  value: any = 0;
  seconds_remaining: any = 0;
  uploadform: boolean = true;
  Loadingform: boolean = false;
  filterform: boolean = false;


  imageObj: File;
  imageUrl: string;


  constructor(private dialogref: MatDialogRef<UploadDialogComponent>, private dialog: MatDialog, private service: AppService) { }

  ngOnInit(): void {
  }

  uploadFile(evt) {


    const FILE = (event.target as HTMLInputElement).files[0];
    this.has_file = true;
    this.imageObj = FILE;
    this.filename = this.imageObj.name;
    this.service.imgFILE = this.imageObj;
    console.log("servicetesttt", this.service.imgFILE)
    console.log("name", this.filename)
    console.log(this.imageObj)

    if (evt == null) {
      this.value = 0;
    } else {
      this.Loadingform = true;
      this.uploadform = false;
      this.seconds_remaining = 100;
      for (let i = 0; i < 100; i++) {
        window.setTimeout(() => (this.value += 1), i * 20);
      }

      for (let i = 0; i < 100; i++) {
        window.setTimeout(() => {
          if (this.seconds_remaining == 1) {
            this.dialogref.close();
            // this.dialog.open(FilterFormComponent)
          }
          else {

            this.seconds_remaining -= 1
          }
        }
          , i * 20);
        console.log("eses", this.seconds_remaining)

      }

    }
  }

  remove() {

    this.has_file = false;
    this.validName = false;
    this.filename = '';

  }

  onFileSelected(event) {
    console.log("dotttt")
    this.uploadFile(event.target.files);
  }


  submit() {
    console.log('upload')

  }
  close() {
    this.dialogref.close()
  }

}
