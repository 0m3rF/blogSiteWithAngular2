import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { routes } from './app.router';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { UpperMenuComponent } from './uppermenu/uppermenu.component';
import { EasyPointComponent } from './easypoint/easypoint.component';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { MainPageContentComponent } from './main-page-content/main-page-content.component';
import { ScrollItemComponent } from './scroll-item/scroll-item.component';
import { SearchComponent } from './search/search.component';
import { ContactComponent } from './contact/contact.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AppService } from './app.service';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    UpperMenuComponent,
    EasyPointComponent,
    MainPageContentComponent,
    ScrollItemComponent,
    SearchComponent,
    ContactComponent,
    SearchPageComponent,
    AdminPageComponent,
    MainPageComponent
  ],
  imports: [
    routes,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [ CookieService , AppService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
