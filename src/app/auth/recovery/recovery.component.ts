import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  home(){
    this.router.navigate(['home'])
  }

  next(){
    this.router.navigate(['login'])
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
  

}
