/**
 * Created by githop on 11/17/16.
 */

import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {SplashComponent} from './splash/splash.component';

export const LANDING_ROUTES = [
  {path: '', component: SplashComponent}
];

@NgModule({
  imports: [RouterModule.forChild(LANDING_ROUTES)],
  exports: [RouterModule]
})
export class LandingRoutesModule {}
