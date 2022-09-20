import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-nav',
  templateUrl: './filter-nav.component.html',
  styleUrls: ['./filter-nav.component.css']
})
export class FilterNavComponent implements OnInit {

  @Output() menuClickedEvent = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }


  menuClicked(){
    this.menuClickedEvent.emit();
  }

  print(item:any){
    item.opened = true;
    console.log(item);
  }

  prints(items:any){
    items.opened = true;
    console.log(items);
  }
}
