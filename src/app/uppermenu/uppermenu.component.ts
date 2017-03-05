import { Component,ViewEncapsulation, ViewChild,Output,EventEmitter } from '@angular/core';
import {MdMenuTrigger, MdSidenav} from '@angular/material';
import {EasyPointComponent} from  '../easypoint/easypoint.component';

declare var $ : any;

@Component({
  selector: 'upper-menu',
  templateUrl: './uppermenu.component.html',
  styleUrls: [
    './uppermenu.component.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class UpperMenuComponent  {

@Output() sidenavEmitter = new EventEmitter();
@Output() scrollBottom = new EventEmitter();

  isSidenavOpened = false;

  toggleSidenav()
  {

    
    this.sidenavEmitter.emit();
    this.isSidenavOpened = !this.isSidenavOpened;

    if(this.isSidenavOpened != false)
    {
    var body = $("html, body");
    body.stop().animate({scrollTop:0}, '500', 'swing');
  
    }
    }

  scrollTo()
  {
    this.scrollBottom.emit();
    console.log("calistimi ?");
  }

  resetEP()
  {
      var element :any = $("#easy_point");
      var w : any = $(window).height();

      var value = Math.round(w*0.1);

      element.css({top: value ,left: value});
      EasyPointComponent._this.setCookie("easyPointy", value + "px");
      EasyPointComponent._this.setCookie("easyPointx", value + "px");
  }
}

