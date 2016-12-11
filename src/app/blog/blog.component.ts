import {Component, OnInit, AfterViewInit, Pipe, PipeTransform} from '@angular/core';
import {BlogService, Article, ArticleSnippet} from "./blog.service";


@Pipe({name: 'bgImage'})
export class BgImagePipe implements PipeTransform {
  transform(imageHref: string) {
    return {
      'background': `url(${imageHref})`,
      'background-size': 'cover',
      'background-repeat': 'none',
      'margin-bottom': '0',
      'background-color': 'white'
    };
  }
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, AfterViewInit {
  articles;
  loading;
  constructor(public blogService: BlogService) { }

  ngOnInit() {
    const articleSnippets: Array<ArticleSnippet> = [];
    this.blogService.articles
      .subscribe((articles: Array<Article>) => {
        this.articles = articles.reduce((accm, a) => {
          accm.push(a.getSnippet());
          return accm;
        }, articleSnippets).sort((a, b) => +new Date(b.date) - +new Date(a.date));
        this.loading = false;
        this.blogService.calcPages();
      })
  }

  ngAfterViewInit() {
    this.loading = this.articles.length === 0;
  }
}
