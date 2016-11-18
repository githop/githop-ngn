/**
 * Created by githop on 11/17/16.
 */


import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ResumeComponent} from './resume.component'

export const RESUME_ROUTES = [
  { path: '', component: ResumeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(RESUME_ROUTES)],
  exports: [RouterModule]
})
export class ResumeRoutesModule {}
