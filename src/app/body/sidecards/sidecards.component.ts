import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidecards',
  templateUrl: './sidecards.component.html',
  styleUrls: ['./sidecards.component.css']
})
export class SidecardsComponent implements OnInit {
  selected: Date | any;
  url:any = '';
  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  
  // onSelectFile(event:any) {
  //   if (event.target.files && event.target.files[0]) {
  //     var reader = new FileReader();

  //     reader.readAsDataURL(event.target.files[0]); // read file as data url

  //     reader.onload = (event) => { // called once readAsDataURL is completed
  //       this.url = event.target?.result;
  //     }
  //   }
  // }
  signup(){
    this.router.navigate(['register'])
  }
}
