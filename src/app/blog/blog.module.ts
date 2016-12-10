import {NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlogComponent, BgImagePipe} from './blog.component';
import { HttpModule } from "@angular/http";
import {BlogService} from "./blog.service";
import {BlogRoutesModule} from "./blog.routes";
import {PostComponent, PostStylePipe} from './post/post.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    BlogRoutesModule
  ],
  declarations: [BlogComponent, PostComponent, BgImagePipe, PostStylePipe]
})
export class BlogModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BlogModule,
      providers: [BlogService]
    };
  }
}
