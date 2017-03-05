import { Component, OnInit, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';

declare var $ : any;

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
 public static _this: MainPageComponent;
  title = 'This is main page!';
  
  items =["1","2","3"]; // for sidenav it is temp
  name = 'Angular 2.4'; 


  constructor() {
    MainPageComponent._this = this;
   }

  ngOnInit() {
  }


  @ViewChild('sidenav') elem: MdSidenav;
  toggleSidenav()
  {
    this.elem.toggle();
  }



}
