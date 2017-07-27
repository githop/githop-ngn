/**
 * Created by githop on 11/17/16.
 */

import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {SplashComponent} from './landing/splash/splash.component';

const APP_ROUTES = [
  { path: '', component: SplashComponent },
  { path: 'resume', loadChildren: 'app/resume/resume.module#ResumeModule' },
  { path: 'blog', loadChildren: 'app/blog/blog.module#BlogModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutesModule {}
