import {Component,Input,trigger,state,style,transition,animate,keyframes} from '@angular/core';
import {CookieService} from 'angular2-cookie/core';
declare var $:any;

/*
ep: Stands for => Easy Point , this component

*/
@Component({
    host: {'(window:keydown)': 'hotkeys($event)','(window:keyup)': 'hotkeys($event)'},//for keyboard events
    selector: 'easy-point',
    templateUrl: './easypoint.component.html',
    styleUrls: ['./easypoint.component.css'],
    animations: [
     trigger('easyPointTrigger',
     [
      state('inactive', style({
        opacity:"0",
        left:"0px",
        top:"0px"
      })),
      state('down1',   style({
        opacity:"1",
        left:"0px",
        top:"70px"
      })),
      state('down2',   style({
        opacity:"1",
        left:"0px",
        top:"130px"
      })),
      state('down3',   style({
        opacity:"1",
        left:"0px",
        top:"190px"
      })),
      state('up1',   style({
        opacity:"1",
        left:"0px",
        top:"-70px"
      })),
      state('up2',   style({
        opacity:"1",
        left:"0px",
        top:"-130px"
      })),
      state('up3',   style({
        opacity:"1",
        left:"0px",
        top:"-190px"
      })),
      state('left1',   style({
        opacity:"1",
        left:"-70px",
        top:"0px"
      })),
      state('left2',   style({
        opacity:"1",
        left:"-130px",
        top:"0px"
      })),
      state('left3',   style({
        opacity:"1",
        left:"-190px",
        top:"0px"
      })),
      state('right1',   style({
        opacity:"1",
        left:"70px",
        top:"0px"
      })),
      state('right2',   style({
        opacity:"1",
        left:"130px",
        top:"0px"
      })),
      state('right3',   style({
        opacity:"1",
        left:"190px",
        top:"0px"
      })),

      transition('inactive <=> down1', animate('300ms ease-in-out')),
      transition('inactive <=> down2',animate('300ms ease-in-out')),
      transition('inactive <=> down3', animate('300ms ease-in-out')),
      transition('inactive <=> up1', animate('300ms ease-in-out')),
      transition('inactive <=> up2',animate('300ms ease-in-out')),
      transition('inactive <=> up3', animate('300ms ease-in-out')),
      transition('inactive <=> left1', animate('300ms ease-in-out')),
      transition('inactive <=> left2',animate('300ms ease-in-out')),
      transition('inactive <=> left3', animate('300ms ease-in-out')),
      transition('inactive <=> right1', animate('300ms ease-in-out')),
      transition('inactive <=> right2',animate('300ms ease-in-out')),
      transition('inactive <=> right3', animate('300ms ease-in-out'))
      

     ]), // end of trigger easyPointTrigger
     trigger('searchTrigger',
     [
      state('inactive', style({
        opacity:"0",
        visibility: "hidden"
      })),
      state('active',style({
        opacity:"0.6",
        visibility: "visible"
      })),
     
       transition('inactive <=> active', animate('400ms ease-in-out'))
     
     
     
     ]), // end of trigger searchTrigger
     trigger('searchElementsTrigger',
     [
      state('inactive', style({
        opacity:"0",
        visibility: "hidden"
      })),
      state('active',style({
        opacity:"1",
        visibility: "visible"
      })),
     
       transition('inactive <=> active', animate('400ms ease-in-out'))
     
     
     
     ]) // end of trigger searchElementsTrigger
  ]
})
export class EasyPointComponent
{
  public static _this:EasyPointComponent;
  key:any;
  animationState1:string = "inactive";
  animationState2:string = "inactive";
  animationState3:string = "inactive";
  animationStateFader:string = "inactive";
  animationStateSearchElements:string = "inactive";
  animationStateContactElements:string = "inactive";
  constructor(private _cookieService:CookieService)
  {
    EasyPointComponent._this = this;
  }


map = []; // to deal with multiple key detection
   hotkeys(e){
    e = e || event; // to deal with IE
    this.map[e.keyCode] = e.type == 'keydown';

    if(this.map[17] && this.map[16] &&this. map[70]){ // CTRL+SHIFT+F
      this.toggleFader(null,0);
    }
    if (e.keyCode == 27){ // escape
        this.closeEveryThing();
    }
    if(this.map[17] && this.map[16] &&this. map[90]){ // CTRL+SHIFT+Z
      this.gotoAdminPage(null);
    }

   }

  ngAfterContentInit()
  {
    this.initializeEasyPoint();  
  }

  initializeEasyPoint()
  {
    var element :any = $("#easy_point");
    var subElements :any = $(".easy_point_element");

    $.each(subElements,(index,value)=>{
      subElements.css({
      top:EasyPointComponent._this.getCookie("easyPointy"),
      left:EasyPointComponent._this.getCookie("easyPointx")
      });
    });

    element.css({top:EasyPointComponent._this.getCookie("easyPointy")});
    element.css({left:EasyPointComponent._this.getCookie("easyPointx")});

      element.mouseover(()=>{


      element.draggable({
      stop: function() {
        let x = element.position().left;
        let y = element.position().top;
        let elW = element.width();
        let elH = element.height();
        let ww = $(window).width();
        let wh = $(window).height();

        if(x < 0) // if ep goes to left side of screen
        {
          element.css({top:y,left:20});
          return;
        }
        if(y < 0 ) // if ep goes to up side of screen
        {
          element.css({top:80,left:x});
          return;
        }

        if( x + elW > ww) // if ep goes to right side of screen
        {
          element.css({top:y,left:(ww-elW-20)});
          return;
        }
        if( y + elH > wh) // if ep goes to down side of screen
        {
          element.css({top:(wh-elH-20),left:x});
          return;
        }

        let xratio = 0;
        let yratio = 0;
        if(x < ww/2) 
        {
          xratio = x / (ww/2);
        }
        else if( x + elW < ww)
        {
          xratio = ((ww) - (x + elW)) / (ww/2) ;
        }

        if(y < wh/2)
        {
          yratio = y / (wh/2);
        }
        else if( y + elH < wh)
        {
          yratio = (wh - (y + elH)) / (wh/2);
        }

        if(yratio < xratio)
        {
          if(y < wh/2)
            element.css({top:80,left:x});

          else
            element.css({top:(wh-elH-20),left:x});
        }
        else
        {
          if(x < ww/2)
            element.css({top:y,left:20});

          else
            element.css({top:y,left:(ww-elW-20)});
        }


        EasyPointComponent._this.setCookie("easyPointy",element.css("top"));
        EasyPointComponent._this.setCookie("easyPointx",element.css("left"));

          $.each(subElements,(index,value)=>{
            subElements.css({
            top:EasyPointComponent._this.getCookie("easyPointy"),
            left:EasyPointComponent._this.getCookie("easyPointx")
              });
            });

        EasyPointComponent._this.animationState1 = "inactive";
        EasyPointComponent._this.animationState2 = "inactive";
        EasyPointComponent._this.animationState3 = "inactive";
      },
      });

      

        let x = element.position().left;
        let y = element.position().top;
        let elW = element.width();
        let elH = element.height();
        let ww = $(window).width();
        let wh = $(window).height();




        if(x < ww*0.15) // left side of screen
        {
          if(y < wh/2) // top side of screen
          { // animation opens to down
            EasyPointComponent._this.animationState1 = "down1";
            EasyPointComponent._this.animationState2 = "down2";
            EasyPointComponent._this.animationState3 = "down3";                
          }
          else // bottom side of screen
          { // animaition opens to up
            EasyPointComponent._this.animationState1 = "up1";
            EasyPointComponent._this.animationState2 = "up2";
            EasyPointComponent._this.animationState3 = "up3";  
          }
        }
        else if(x <= ww/2) // left mid side of screen
        { // animation opens to right
          EasyPointComponent._this.animationState1 = "right1";
          EasyPointComponent._this.animationState2 = "right2";
          EasyPointComponent._this.animationState3 = "right3";  
        }
        else if((x + elW ) > ww*0.85 ) // right side of screen
        {
          if(y < wh/2) // top side of screen
          {
            EasyPointComponent._this.animationState1 = "down1";
            EasyPointComponent._this.animationState2 = "down2";
            EasyPointComponent._this.animationState3 = "down3";                
          }
          else // bottom side of screen
          {
            EasyPointComponent._this.animationState1 = "up1";
            EasyPointComponent._this.animationState2 = "up2";
            EasyPointComponent._this.animationState3 = "up3"; 
          }
        }
        else // right mid side of screen
        { // animation opens to left
          EasyPointComponent._this.animationState1 = "left1";
          EasyPointComponent._this.animationState2 = "left2";
          EasyPointComponent._this.animationState3 = "left3";  
        }
      })

      element.mouseout(()=>{
        EasyPointComponent._this.animationState1 = "inactive";
        EasyPointComponent._this.animationState2 = "inactive";
        EasyPointComponent._this.animationState3 = "inactive";
      });
  }


  easypointClick(e)
  {
    console.log("tek" + e);
    this.scrollToTop(e);
  }

  easyPointDoubleClick(e)
  {
   console.log("çift" + e);
   this.gotoAdminPage(e);
  }

  gotoMainPage(e)
  {
    alert("This will take to main page!");
    e.stopPropagation();
  }

  gotoContactMe(e)
  {
    
    this.toggleFader(null,1);
    
    if(e != null)
    e.stopPropagation();
  }

  gotoAdminPage(e)
  {
    alert("This double click will open admin page");
    if(e != null)
    e.stopPropagation();
  }

  scrollToTop(e)
  {
    var body = $("html, body");
    body.stop().animate({scrollTop:0}, '500', 'swing');
    e.stopPropagation();
  }

  closeEveryThing()
  {
    //$("#fader").css({"visibility":"hidden"});

    this.animationStateFader = "inactive";
    this.animationStateSearchElements = "inactive";
    this.animationStateContactElements = "inactive";
     $("#searchComp-input input").val("");
  }

  toggleFader(e, mode)
  {
// mode 0 = search
// mode 1 = contact
    if(this.animationStateFader == "active" || this.animationStateSearchElements == "active")
    {
       this.animationStateFader = "inactive"; 
      this.animationStateSearchElements = "inactive";
    }
    
    else
    {
      if(mode == 0)
      {
      this.animationStateFader = "active"; 
      this.animationStateSearchElements= "active";      
      $("#searchComp-input input").focus();
      }
      else if(mode == 1)
      {
      this.animationStateFader = "active"; 
      this.animationStateContactElements = "active";
      } 

    }

      if(e != null)
      e.stopPropagation();
  }

  getCookie(key: string){
    return this._cookieService.get(key);
  }

  setCookie(key:string,value:any)
  {
    this._cookieService.put(key,value);
  }
}