import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  url:any = '';
  onSelectFile(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target?.result;
      }
    }
}
  public delete(){
    this.url = null;
  }

  navigateDashboard(){
    this.router.navigate(['dashboard']);
  }

  navigateDataSource(){
    this.router.navigate(['datasource/competency']);
  }

  navigateReports(){
    this.router.navigate(['reports']);
  }

  navigateLibrary(){
    this.router.navigate(['library']);
  }
}
