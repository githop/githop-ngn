import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {BlogService, Article} from "../blog.service";

export interface Style {
  background?: string
  'margin-bottom'?: string
  color?: string
  width?: string
  padding?: string
}

@Pipe({name: 'postStyle'})
export class PostStylePipe implements PipeTransform {
  transform(articlesObj): Style {
    let {kind, nextKind} = articlesObj;

    if (kind === 'Header' && nextKind === 'Paragraph') {
      return { 'background': 'black', 'margin-bottom': '4px', 'color': '#F90050' };
    }

    if (kind === 'Paragraph' && nextKind === 'Header') {
      return { 'background': 'white', 'margin-bottom': '4px' };
    }

    if (kind === 'Paragraph' && nextKind === 'Paragraph' ||
      kind === 'Paragraph' && nextKind === 'Image') {
      return { 'background': 'white', 'margin-bottom': 'none' };
    }

    if (kind === 'Paragraph' && nextKind === null) {
      return { 'background': 'white', 'margin-bottom': '0' }
    }

    if (kind === 'Image' && nextKind === 'Paragraph') {
      return { 'background': 'white', 'margin-bottom': 'none', 'padding': '0' };
    }

    if (kind === 'Image' && nextKind === 'Header' ||
      kind === 'Image' && nextKind === null) {
      return { 'margin-bottom': '0', 'padding': '0' }
    }
  }
}


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  article: Article;

  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit(): void {

    this.route.params.forEach((p: Params) => {
      this.blogService.articles.subscribe((articles: Array<Article>) => {
        this.article = articles.find(a => a.id === +p['id'])
      })
    });

    window.scrollTo(0,0);
  }

}
