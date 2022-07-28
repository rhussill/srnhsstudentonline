import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from 'src/app/shared/delete-dialog/delete-dialog.component';
import { EditTrainingProviderComponent } from '../edit-training-provider/edit-training-provider.component';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-view-training-provider',
  templateUrl: './view-training-provider.component.html',
  styleUrls: ['./view-training-provider.component.css']
})
export class ViewTrainingProviderComponent implements OnInit {


  data : any = new MatTableDataSource([]);
  programsOfferedData:any = new MatTableDataSource([]);

    //data for paginator
    pageNo:number =1;
    pageSize:number=10;
    total:any;

    isLoading:boolean = false;

  displayedColumns : string[] = ["programs_offered","training_schedule","training_fee"];

  constructor(
    private router: Router,
    private dialog : MatDialog,
    private appService: AppService
    ) { }

  ngOnInit(): void {
    //fetch data if appService id is populated, reroute to the training providers table otherwise
    if(this.appService.id == null || this.appService.id == undefined){
      this.router.navigate(['library/training-provider']);
    }else{
      this.getData(this.appService.id);
      //this.getAllProgramsOffered(this.pageNo,this.pageSize);
    }
  }

  rowClicked(){
    //handle row click event
    console.log("Row Clicked");
  }

  editClicked(){
    console.log("Edit Clicked");
    this.dialog.open(EditTrainingProviderComponent,{width:'40%', height:'40%'}).afterClosed().subscribe(data=>{
      //perform something on dialog close
      this.getData(this.appService.id);
    })
  }

  deleteClicked(){
    console.log('Delete Clicked');
    this.dialog.open(DeleteDialogComponent,{
      data : {
        source : 'training provider'
      }
    }).afterClosed().subscribe(
      data => {
        //Perform actions to refresh the page
        console.log("Dialog Closed");
      }
    )
  }

    getData(id:number){
      this.isLoading = true;
      //get the training provider using the id

      this.appService.getTrainingProvider(id).subscribe(data =>
        {
          this.data = data;
          this.isLoading = false;
        },
        err =>{
          console.log(err);
          this.isLoading = false;
        }
        )


    }

    //function to fetch all the training providers
    getAllProgramsOffered(pageNo:number, pageSize:number){
      //call the api to fecth all programs offered by the training provider
      console.log("Fetching all programs offered...")
    }
  
  
    onPaginate(event:any){
      this.pageNo = event.pageIndex +1;
      this.pageSize = event.pageSize;
  
      this.getAllProgramsOffered(this.pageNo,this.pageSize);
      console.log('onPaginate working!')
    }

}
