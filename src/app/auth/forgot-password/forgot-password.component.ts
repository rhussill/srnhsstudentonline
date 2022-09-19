import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  
  email:any;
  results:any;

  constructor(private router:Router , private service:AppService) { }

  ngOnInit(): void {
  }

  send(){
    // this.router.navigate(['recovery'])
  }

  home(){
    this.router.navigate(['home'])
  }

  fgtemail(form:any){

    form = {
      "email":form.email,

};
    this.service.fgtemail(form).subscribe(data=>{
      console.log(data)
      localStorage.setItem('_id',data.result._id)
      this.router.navigate(['recovery'])

    })
  }

}
