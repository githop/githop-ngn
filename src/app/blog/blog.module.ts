import {NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { HttpModule } from "@angular/http";
import {BlogService} from "./blog.service";
import {BlogRoutesModule} from "./blog.routes.module";



@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    BlogRoutesModule
  ],
  declarations: [BlogComponent]
})
export class BlogModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BlogModule,
      providers: [BlogService]
    };
  }
}
