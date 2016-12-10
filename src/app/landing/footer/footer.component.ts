import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gth-footer',
  template: `
<footer class="gth-footer gth-border">
  <h3>Built with love by <a href="https://github.com/githop/githop-ng2" target="_blank" rel="noreferrer noopener">githop</a></h3>
</footer>
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
