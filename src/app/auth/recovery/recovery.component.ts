import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {

  code:any;
  code2:any;
  code3:any;
  code4:any;
  code5:any;
  code6:any;

 
  constructor(private router:Router , private service:AppService) { }

  ngOnInit(): void {
  }

  home(){
    this.router.navigate(['home'])
  }

  next(){
    // this.router.navigate(['login'])
  }

  numberOnly(evt:any){
    
    var ch = String.fromCharCode(evt.which);

    if(!(/[0-9]/.test(ch))){
      evt.PreventDefault();
    }
  }

  move(frominput:any, toinput:any){
    var length =frominput.length;
    var maxlength:any = frominput.getAttribute(maxlength);

    if(length==maxlength){
      toinput.focus();
    }
  }

  codesend(form:any){
 
    form = { 
      "_id":localStorage.getItem("_id"),
      "code":`${form.code}${form.code2}${form.code3}${form.code4}${form.code5}${form.code6}`
    }

    console.log('test')
    console.log(form)
    this.service.sendcode(form).subscribe(data=>{
      //console.log(data)
      if(data.result=="Succesful"){
        this.router.navigate(['createpassrecovery'])
      }else if (data.result=="Failure"){
        alert(data.result)
      }
    })
  }
  

}
