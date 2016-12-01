import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gth-footer',
  template: `
<footer class="gth-footer gth-border">
  <h3>Built with love by githop</h3>
</footer>
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
