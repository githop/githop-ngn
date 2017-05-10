import {Component, ElementRef, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import Showdown from 'showdown';

const headerClass = 'gth-card__header gth-card__header-text';
const classMap = {
  h1: headerClass,
  h2: headerClass
};

const bindings = Object.keys(classMap)
  .map(key => ({
    type: 'output',
    regex: new RegExp(`<${key}>`, 'g'),
    replace: `<${key} class="${classMap[key]}">`
  }));

@Component({
  selector: 'gth-markdown',
  template: `<div #markdown></div>`,
  styles: []
})
export class MarkdownComponent implements OnChanges {
  @Input() text: string;
  @Output() html = new EventEmitter<string>();

  converter = new Showdown.Converter({
    extensions: bindings,
    noHeaderId: true
  });

  constructor(private elm: ElementRef) { }

  ngOnChanges(changes) {
    this.toMarkdown(changes.text.currentValue)
  }

  toMarkdown(rawText: string) {
    if (rawText != null) {
      const html = this.converter.makeHtml(rawText);
      this.elm.nativeElement.innerHTML = html;
      this.html.emit(html);
    }
  }

}
