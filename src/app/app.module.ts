import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LandingModule } from './landing/landing.module';

import { AppComponent } from './app.component';
import { AppRoutesModule } from './app.routes';
import { BlogModule } from './blog/blog.module';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LandingModule,
    AppRoutesModule,
    BlogModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
