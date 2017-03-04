import { Component, ViewChild} from '@angular/core';
import { MdSidenav } from '@angular/material';

declare var $ : any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aasdad worked!';

  @ViewChild('sidenav') elem:MdSidenav;
  toggleSidenav($event)
  {
    this.elem.toggle();
  }
  scrollToBottom()
  {


    var ancPos = $("#anchor-bottom").position();

    window.scrollTo(0,ancPos.top);

        console.log("emit catched");

  }
  items =["1","2","3"];
  name = 'Angular 2.4'; 
}
