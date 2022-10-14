import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { AppService } from '../app.service';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { AdminAdduserComponent } from './admin-adduser/admin-adduser.component';
import { AdminEdituserComponent } from './admin-edituser/admin-edituser.component';
import { DatePipe } from '@angular/common';
import { debounce } from 'lodash';
import { AdminAdmineditComponent } from './admin-edituser/admin-adminedit/admin-adminedit.component';


export interface viewCompetency {
  id:number;
  user:any;
  division: any;
  division_chief: any;
  date_submitted: any;
  status: any;
}





const ELEMENT_DATA: viewCompetency[] = [
  {id:1 ,user: 'John Lorenz', division: 'Incomplete' , division_chief: 'H',date_submitted:'----',status:'pending'},
  {id:2 ,user: 'Sitesphil', division: 'Incomplete', division_chief: 'H',date_submitted:'----',status:'pending'},
 
];

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  displayedColumns: string[] = ['Email','FirstName', 'LastName','pnumber','dob','role','status'];

  viewAlladmindata:any;
  viewAlldatasource:any;
  pipe = new DatePipe('en-US');

  keyword:string ='';
  fName:string = '';

  activestat=false;
  inactivestat=false

  
  pageNo:number = 1 ;
  pageSize:number= 5;
  total:number = 0;
  constructor( private dialog : MatDialog ,private service:AppService) { }

  ngOnInit(): void {

   

    this.applyFilter = debounce(this.applyFilter,1000);

    this.getAllusers();
    this.getAlladmin();
  }

  addUser(){
    this.dialog.open(AdminAdduserComponent).afterClosed().subscribe(result=>{
      this.getAllusers();
    })
  }

  getAlladmin(){

    this.service.getalladmin(this.pageNo,this.pageSize).subscribe(data=>{

      console.log("adminsss",data)
      this.total = data[0].count
      console.log(this.total)
      this.viewAlladmindata = data[0].users
      console.log("admin",data[0].users)
    })
    
  }

  getAllusers(){

    
    this.service.getallUsers(this.pageNo,this.pageSize).subscribe(data=>{
      
      this.total = data[0].count
      console.log(this.total)
      this.viewAlldatasource = data[0].users
      console.log("user",data[0].users)
    })
  }

  rowClicked(row){
    console.log(row)
    this.service._id =row._id
    this.service.status= row.status
    this.service.email = row.email
    this.service.fname = row .fName
    this.service.lname = row.lName
    this.service.pnumber = row.pNumber
    this.service.dob= row.date
    this.service.role = row.roles


    this.dialog.open(AdminEdituserComponent).afterClosed().subscribe(data=>{
      //perform something on dialog close
      this.getAllusers();
      this.getAlladmin();
    })
  }

  rowClickedadmin(row){
    console.log(row)
    this.service._id =row._id
    this.service.status= row.status
    this.service.email = row.email
    this.service.fname = row .fName
    this.service.lname = row.lName
    this.service.pnumber = row.pNumber
    this.service.dob= row.date
    this.service.role = row.roles


    this.dialog.open(AdminAdmineditComponent).afterClosed().subscribe(data=>{
      //perform something on dialog close
      this.getAlladmin();
      this.getAllusers();
    })

  }

 


  applyFilter(value:string){

    this.keyword = value.trim().toLowerCase();
    this.search();
    console.log(this.keyword)
    console.log(this.keyword)

    
  }

  search(){
    if(this.keyword == undefined || this.keyword == ''){
      this.getAllusers()
    }else{
      this.service.searchAdminuser(this.keyword,this.pageNo,this.pageSize).subscribe(data=>{

        console.log("search",data)
        this.viewAlldatasource = data;
      })
    }

  }

  onPageChange(event){
    console.log(event);
    //this.getData(this.pageNo,this.pageSize);
    this.pageNo = event.pageIndex + 1;
    // this.pageNo =event.pageNo
    // this.total =event.total
    this.search();
  }



}
