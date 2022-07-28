import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog,MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  source : any = '';

  constructor(
    private dialogRef : MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data:any,
    private router: Router,
    private appService : AppService,
    private dialog: MatDialog
  ) {
    this.source = data.source;
   }

  ngOnInit(): void {
    console.log(this.source);
  }

  cancelClicked(){
    this.dialogRef.close();
  }

  deleteClicked(){
    //call the delete API
    if(this.source == 'training provider'){
    this.appService.deleteTrainingProvider(this.appService.id).subscribe(
      data=>{
        this.dialogRef.close();
        this.dialog.open(DialogComponent,{
          data : {
            message: "Successfully deleted entry"
          }
        });
        this.router.navigate(['/library/training-provider']);
      },err =>{
        console.log(err);
      }
    )
    }
    else{
      console.log(this.appService.progID);
      this.appService.deleteProgram(this.appService.progID).subscribe(
        data=>{
          this.dialogRef.close();
          alert("Successfully deleted entry");
          this.router.navigate(['programs']);
        },
        err => {
          console.log(err);
        }
      )
    }

  }

}
