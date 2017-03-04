import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { UpperMenuComponent } from './uppermenu/uppermenu.component';
import { EasyPointComponent } from './easypoint/easypoint.component';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { MainPageContentComponent } from './main-page-content/main-page-content.component';
import { ScrollItemComponent } from './scroll-item/scroll-item.component';
import { SearchComponent } from './search/search.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    UpperMenuComponent,
    EasyPointComponent,
    MainPageContentComponent,
    ScrollItemComponent,
    SearchComponent,
    ContactComponent
  ],
  imports: [

    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
