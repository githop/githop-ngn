/**
 * Created by githop on 11/17/16.
 */

import {NgModule} from "@angular/core";
import {BlogComponent} from './blog.component';
import {RouterModule} from "@angular/router";
import {PostComponent} from './post/post.component';
import {PostAdminComponent} from "./post-admin/post-admin.component";
import {PostUpdateComponent} from "./post-update/post-update.component";
import {LoginComponent} from "./login/login.component";


const BLOG_ROUTES = [
  { path: '', component: BlogComponent },
  { path: 'login', component: LoginComponent },
  { path: 'blog/admin', component: PostAdminComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'post/:id/edit', component: PostUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(BLOG_ROUTES)],
  exports: [RouterModule]
})
export class BlogRoutesModule {}
