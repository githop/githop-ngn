/**
 * Created by githop on 11/17/16.
 */

import {NgModule} from "@angular/core";
import {BlogComponent} from './blog.component';
import {RouterModule} from "@angular/router";

const BLOG_ROUTES = [
  { path: '', component: BlogComponent }
];

@NgModule({
  imports: [RouterModule.forChild(BLOG_ROUTES)],
  exports: [RouterModule]
})
export class BlogRoutesModule {}
