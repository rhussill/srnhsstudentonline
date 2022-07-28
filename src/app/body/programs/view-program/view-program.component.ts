import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from 'src/app/shared/delete-dialog/delete-dialog.component';
import { EditProgramComponent } from 'src/app/body/programs/edit-program/edit-program.component';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-view-program',
  templateUrl: './view-program.component.html',
  styleUrls: ['./view-program.component.css']
})
export class ViewProgramComponent implements OnInit {


  data : any = new MatTableDataSource([]);
  programsOfferedData:any = new MatTableDataSource([]);

    //data for paginator
    pageNo:number =1;
    pageSize:number=10;
    total:any;

  displayedColumns : string[] = ["programs_offered","training_schedule","training_fee"];

  constructor(
    private router: Router,
    private dialog : MatDialog,
    private appService: AppService
    ) { }

  ngOnInit(): void {
    //fetch data if appService id is populated, reroute to the training providers table otherwise
    if(this.appService.progID == null || this.appService.progID == undefined){
      this.router.navigate(['programs']);
    }else{
      this.getData(this.appService.progID);
      //this.getAllProgramsOffered(this.pageNo,this.pageSize);
    }
  }

  rowClicked(){
    //handle row click event
    console.log("Row Clicked");
  }

  editClicked(){
    console.log("Edit Clicked");
    this.dialog.open(EditProgramComponent).afterClosed().subscribe(data=>{
      //perform something on dialog close
      this.getData(this.appService.progID);
    })
  }

  deleteClicked(){
    console.log('Delete Clicked');
    this.dialog.open(DeleteDialogComponent,{
      data : {
        source : 'training program'
      }
    }).afterClosed().subscribe(
      data => {
        //Perform actions to refresh the page
        console.log("Dialog Closed");
        this.router.navigate(['programs']);
      }
    )
  }

    getData(id:number){
      //get the training provider using the id

      this.appService.getProgram(id).subscribe(data =>
        {
          this.data = data;
        },
        err =>{
          console.log(err);
        }
        )
    }

    //function to fetch all the training providers
    // getAllProgramsOffered(pageNo:number, pageSize:number){
    //   //call the api to fecth all programs offered by the training provider
    //   console.log("Fetching all programs offered...")
    // }
  
  
    onPaginate(event:any){
      this.pageNo = event.pageIndex +1;
      this.pageSize = event.pageSize;
  
      // this.getAllProgramsOffered(this.pageNo,this.pageSize);
      console.log('onPaginate working!')
    }

}
