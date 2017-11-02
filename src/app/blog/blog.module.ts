import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent, BgImagePipe } from './blog.component';
import { BlogService } from "./blog.service";
import { BlogRoutesModule } from "./blog.routes";
import { PostComponent, PostStylePipe } from './post/post.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
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
