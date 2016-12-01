import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {LandingModule} from "./landing/landing.module";

import { AppComponent } from './app.component';
import {AppRoutesModule} from "./app.routes";
import {BlogModule} from "./blog/blog.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    LandingModule,
    AppRoutesModule,
    BlogModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
