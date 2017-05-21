import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent, BgImagePipe } from './blog.component';
import { HttpModule } from "@angular/http";
import {BlogService, FirebaseBlogService} from "./blog.service";
import {BlogRoutesModule} from "./blog.routes";
import {PostComponent, PostStylePipe} from './post/post.component';
import { MarkdownComponent } from './markdown/markdown.component';
import {FormsModule} from "@angular/forms";
import { PostEditorComponent } from './post-editor/post-editor.component';
import { PostAdminComponent } from './post-admin/post-admin.component';
import { PostUpdateComponent } from './post-update/post-update.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { LoginComponent } from './login/login.component';
import { UploadsService } from './uploads.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    BlogRoutesModule,
    FormsModule
  ],
  declarations: [
    BlogComponent,
    PostComponent,
    BgImagePipe,
    PostStylePipe,
    MarkdownComponent,
    PostEditorComponent,
    PostAdminComponent,
    PostUpdateComponent,
    PostDetailComponent,
    LoginComponent
  ],
})
export class BlogModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BlogModule,
      providers: [
        BlogService,
        FirebaseBlogService,
        UploadsService
      ]
    };
  }
}
