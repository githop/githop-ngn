import {Component, OnInit, AfterViewInit} from '@angular/core';
import {BlogService, Article, ArticleSnippet} from "./blog.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, AfterViewInit {
  constructor(private blogService: BlogService) { }

  articles;
  loading;
  ngOnInit() {
    const articleSnippets: Array<ArticleSnippet> = [];
    this.blogService.articles
      .subscribe((articles: Array<Article>) => {
        this.articles = articles.reduce((accm, a) => {
          accm.push(a.getSnippet());
          return accm;
        }, articleSnippets).sort((a, b) => +b.date - +a.date);
        this.loading = false;
      })
  }

  ngAfterViewInit() {
    this.loading = this.articles.length === 0;
  }

  setBgImage(href) {
    return {
      'background': `url(${href})`,
      'background-size': 'cover',
      'background-repeat': 'none',
      'margin-bottom': '0',
      'background-color': 'white'
    };
  }
}
