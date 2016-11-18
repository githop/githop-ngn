import {ResumeCard, experience, sideProjects, talks, startup, other, education} from "./resume.data";
/**
 * Created by githop on 11/13/16.
 */

export class ResumeService {
  private _cards: Array<ResumeCard> = [];

  constructor() {
    this._cards.push(
      experience,
      sideProjects,
      talks,
      startup,
      other,
      education
    );
  }

  get cards() {
    return this._cards;
  }
}
