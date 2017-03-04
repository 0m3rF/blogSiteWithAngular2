import {Component} from '@angular/core';
import {MdSnackBar} from '@angular/material';
import {EasyPointComponent} from '../easypoint/easypoint.component';
declare var $:any;

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent
{
    constructor(public snackBar: MdSnackBar) {}

    sendContactForm()
    {
        var name = $("#contact-name");
        var email = $("#contact-email");
        var message = $("#contact-message");

        if(name.val() == "")
        {
            this.snackBar.open("İsim boş olamaz!", "KAPAT", {duration: 1000,});
            return;
        }
        if(email.val() == "")
        {
            this.snackBar.open("Emali boş olamaz!", "KAPAT", {duration: 1000,});
            return;
        }
        if(message.val() == "")
        {
            this.snackBar.open("Mesaj boş olamaz!", "KAPAT", {duration: 1000,});
            return;
        }

        name.val("");
        email.val("");
        message.val("");
        console.log("form gönderilecek!");

        EasyPointComponent._this.closeEveryThing();
        this.snackBar.open("Form Gönderildi!", "KAPAT", {duration: 2000,});
    }

    log(x)
    {
        console.log(x);
        
    }
}