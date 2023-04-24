import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from 'src/app/app.service';
import { PdfViwerComponent } from './pdf-viwer/pdf-viwer.component';
import { UploadDialogComponent } from '../../upload-dialog/upload-dialog.component';
import { FilterFormComponent } from '../../filter-form/filter-form.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  formgrade = this.service.filegrade
  detail:any;

  grade:any;
  constructor(private service:AppService , private dialog:MatDialog) { }

  ngOnInit(): void {

    this.detail= this.service.userDetail
    console.log(this.detail)
    this.getgrade(this.formgrade)
  }

  view(){
    this.dialog.open(PdfViwerComponent)
  }

  submit(){
    this.dialog.open(UploadDialogComponent).afterClosed().subscribe(
      data => {
        
     
      }
    )
  }

  getgrade(form:any){
    this.service.getgrade(form).subscribe(data=>{
      console.log(data['fail'])

      this.grade = data['fail']

   

    })
  }
  
  

}
