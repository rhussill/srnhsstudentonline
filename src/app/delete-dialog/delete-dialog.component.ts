import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AppService } from '../app.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  filename:any

  constructor(private dialogref: MatDialogRef<DeleteDialogComponent> , private service :AppService) { }

  ngOnInit(): void {

    this.filename= this.service.filetodelete
  }

  cancel(){
      this.dialogref.close();
  }

  delete(){
     this.service.deletefile({FileName:this.service.filetodelete}).subscribe(data=>{
      this.dialogref.close();
      console.log("dilit",data)
    })
  }

}
