import { DatePipe } from '@angular/common';
import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [DatePipe],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  today = Date.now();
  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log('workimg');
  }
  home(){
    this.router.navigate(['home'])

  }
  login(form:any){
    
  }
  signup(){
    this.router.navigate(['register'])
  }

  recovery(){

    this.router.navigate(['forgotpass'])

  }

}
