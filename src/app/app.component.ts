import { Component, ViewChild } from '@angular/core';
import { MainPageComponent} from './main-page/main-page.component'
import { MdSidenav } from '@angular/material';

declare var $ : any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {


  scrollToBottom()
  {
    console.log("this is scroll to bottom in app compo");
    var ancPos = $("#anchor-bottom").position();
    window.scrollTo(0,ancPos.top);
  }

  toggleSidenav()
  {
    MainPageComponent._this.toggleSidenav();
  }

}
