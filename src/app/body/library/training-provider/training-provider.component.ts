import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CreateTrainingProviderComponent } from './create-training-provider/create-training-provider.component';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-training-provider',
  templateUrl: './training-provider.component.html',
  styleUrls: ['./training-provider.component.css']
})
export class TrainingProviderComponent implements OnInit {

  sample_data = [
    { training_provider : "SitesPhil", contact_person: "Wala", email_address: "sp@sitesphil.com", rating: 4.1, status:"active"}
  ];
  data = new MatTableDataSource(this.sample_data);

  isLoading:boolean=false;

  //data for paginator
  pageNo:number =1;
  pageSize:number=10;
  total:any;

  displayedColumns: string[] = ['training_provider','contact_person','email_address','number', 'status'];

  constructor(
    private router: Router,
    private dialog:MatDialog,
    private appService: AppService
    ) { }

  ngOnInit(): void {
    this.getData(this.pageNo,this.pageSize);
  }
  
  rowClicked(id:number){
    this.appService.id = id;
    this.router.navigate(['/library/training-provider/view']);
  }

  addClicked(){
    this.dialog.open(CreateTrainingProviderComponent,{width:'40%', height:'40%'}).afterClosed().subscribe(data=>{
      //perform something after dialog close
      this.getData(this.pageNo,this.pageSize);
    })
  }

  //function to fetch all the training providers
  getData(pageNo:number,pageSize:number){
    this.isLoading = true;
    //call the api to fecth all training providers
    this.appService.getAllTrainingProvider(pageNo,pageSize).subscribe(data=>{
      this.data = new MatTableDataSource(data.data);
      this.total = data.total;
      this.isLoading = false;
    },err => {
      console.log(err);
      this.isLoading = false;
    })

  }


  onPaginate(event:any){
    this.pageNo = event.pageIndex +1;
    this.pageSize = event.pageSize;

    this.getData(this.pageNo,this.pageSize);
    console.log('onPaginate working!')
  }

}
