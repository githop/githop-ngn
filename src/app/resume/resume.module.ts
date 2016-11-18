import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import {ResumeService} from "./ResumeService";
import {ResumeRoutesModule} from "./resume.routes";



@NgModule({
  imports: [
    CommonModule,
    ResumeRoutesModule
  ],
  providers: [ResumeService],
  declarations: [ResumeComponent]
})
export class ResumeModule { }
