import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SplashComponent } from './splash/splash.component';
import {LandingRoutesModule} from "./landing.routes.module";


@NgModule({
  imports: [
    CommonModule,
    LandingRoutesModule
  ],
  declarations: [NavComponent, FooterComponent, SplashComponent],
  exports: [NavComponent, FooterComponent]
})
export class LandingModule { }
