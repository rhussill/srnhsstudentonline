import { Component, OnInit } from '@angular/core';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}


@Component({
  selector: 'app-app-compoment',
  templateUrl: './app-compoment.component.html',
  styleUrls: ['./app-compoment.component.scss']
})
export class AppCompomentComponent implements OnInit {

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
