import { Component, ViewChild } from '@angular/core';
import { MainPageComponent} from './main-page/main-page.component'
import { MdSidenav } from '@angular/material';
import { AppService } from './app.service';

declare var $ : any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AppService ]
})
export class AppComponent   {

  constructor(private _service: AppService)
  {

  }

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

  ngAfterContentInit()
  {
    var elems:any;
  this._service.getElements().then( elem =>  elems = elem);
    console.log("Eleemnts =  " + elems);
  }

}
