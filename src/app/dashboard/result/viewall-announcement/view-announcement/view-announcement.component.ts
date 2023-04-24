import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-view-announcement',
  templateUrl: './view-announcement.component.html',
  styleUrls: ['./view-announcement.component.css']
})
export class ViewAnnouncementComponent implements OnInit {

  data:any;

  constructor(private service:AppService) { }

  ngOnInit(): void {
    this.getannounce()
  }

  getannounce(){
    this.data = this.service.anounceData 
  }

}
