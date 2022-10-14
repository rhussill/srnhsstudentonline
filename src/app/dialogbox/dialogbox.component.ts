import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';


@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})
export class DialogboxComponent implements OnInit {

  message:string ='';

  constructor( private dialogRef : MatDialogRef<DialogboxComponent>,
    @Inject(MAT_DIALOG_DATA) private data:any,
    private router: Router,
    private appService : AppService) {

      this.message = data.message;
     }

  ngOnInit(): void {
  }

  okay(){
    this.dialogRef.close();
  }

}
