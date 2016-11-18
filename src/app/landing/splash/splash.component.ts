import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gth-splash',
  template: `
    <div class="gth-splash gth-border">
      <h1>splash Works!</h1>
      
      <div class="gth-splash__body">
      Technology professional seeking web development positions. Highly motivated, self-directed, autodidactic and passionate. An adept communicator who interfaces well with a diverse set of personality types. Possesses a unique blend of interpersonal and analytical skills and will apply them to the benefit of your organization.
      </div>
    </div>
  `,
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
