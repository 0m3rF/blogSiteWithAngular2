import { Component, OnInit } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'scroll-item',
  templateUrl: './scroll-item.component.html',
  styleUrls: ['./scroll-item.component.css']
})
export class ScrollItemComponent {

    posts = ["Denemee","denemee321312","121321321","This is anoyher post"];

    ngAfterViewInit()
    {
        
    /* Store the original positions */
    var elems = $('.post');
    var stops = [];
    for(var i = 0 ; i < elems.length ; i++)
    {
        stops.push($(elems[i]).position().top);
    }
    
    /* respond to the scroll event */
    $(window).scroll(function(){
        /* get the current scroll position */
        var st = $(window).scrollTop() + 64;
        
        /* change classes based on section positions */

        for(var i = 0; i < stops.length; i++)
        {
            if(st >= stops[i])
               $(elems[i]).addClass('latched');
            else
                $(elems[i]).removeClass('latched');
        }

    });


   
    }
}
