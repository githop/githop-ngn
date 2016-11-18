import { Component } from '@angular/core';

@Component({
  selector: 'gth-root',
  template: `
    <gth-nav></gth-nav>
    <div class="gth-content">
      <router-outlet></router-outlet>
    </div>
    <gth-footer></gth-footer>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
