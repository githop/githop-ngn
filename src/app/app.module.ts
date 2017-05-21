import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { LandingModule } from "./landing/landing.module";

import { AppComponent } from './app.component';
import {AppRoutesModule} from "./app.routes";
import {BlogModule} from "./blog/blog.module";
import {AngularFireModule, AuthMethods, AuthProviders} from "angularfire2";

import {FIREBASE_CONF} from '../environments/firebase';
import {FlexLayoutModule} from "@angular/flex-layout";

const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    LandingModule,
    AppRoutesModule,
    BlogModule.forRoot(),
    AngularFireModule.initializeApp(FIREBASE_CONF, firebaseAuthConfig),
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
