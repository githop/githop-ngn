import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'gth-nav',
  template: `
  <nav class="gth-nav gth-border">
    <div class="gth-home" routerLink="">
        <h1>githop</h1>
    </div>
  
    <div class="gth-nav__controls">
      <div>
        <a routerLink="/resume">resume</a>
      </div>
      <div>
        <a routerLink="/blog">blog</a>
      </div>
    </div>
  </nav>`,
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
