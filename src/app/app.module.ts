import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LandingModule } from "./landing/landing.module";

import { AppComponent } from './app.component';
import {AppRoutesModule} from "./app.routes";
import { BlogModule } from "./blog/blog.module";
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LandingModule,
    AppRoutesModule,
    BlogModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
