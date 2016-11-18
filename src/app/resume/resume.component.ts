import {Component, OnInit} from '@angular/core';
import {ResumeService} from "./ResumeService";
import {ResumeCard} from "./resume.data";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  public cards: Array<ResumeCard> = [];
  constructor(public resume: ResumeService) {}

  ngOnInit() {
    this.cards = this.resume.cards;
  }
}
