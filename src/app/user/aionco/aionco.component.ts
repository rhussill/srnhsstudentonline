import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aionco',
  templateUrl: './aionco.component.html',
  styleUrls: ['./aionco.component.css']
})
export class AioncoComponent implements OnInit {
  rightSideIsVisible:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
