/**
 * Created by githop on 11/14/16.
 */

import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

export interface ArticleModel {
  title: string
  id: number
  content: Array<Content>
}

export interface Content {
  kind: string
  article_id: number
  href: string
  id: number
  text?: string
  sort_order: number
  created_at: Date
  updated_at: Date
}

export interface ArticleSnippet {
  title: string
  id: number
  date: Date
  image?: string
  header?: string
  para?: string
}

export class Article implements ArticleModel, ArticleSnippet {
  public id;
  public title;
  public content;
  public date;

  constructor(articleData) {
    Object.keys(articleData).forEach(prop => {
      this[prop] = articleData[prop];
    });

  }

  getSnippet(): ArticleSnippet {
    const snippet = this.content.slice(0, 3);
    return new Article({
      id: this.id,
      title: this.title,
      date: this.date,
      image: snippet[0].href,
      header: snippet[1].text,
      para: snippet[2].text
    });
  }
}

@Injectable()
export class BlogService {
  private _articles: BehaviorSubject<Array<Article> | Array<ArticleSnippet>> = new BehaviorSubject([]);
  private _page = 4;
  private _pages;

  constructor(private http: HttpClient) {
    this._getArticles();
  }

  get page() {
    return this._page
  }

  get articles() {
    return this._articles;
  }

  calcPages() {
    this._pages = Math.ceil(this.articles.value.length / 4);
  }

  showMore() {
    if (this.page < this.articles.value.length) {
      this._page += 4;
    }
  }

  private _getArticles() {
    return this.http.get(environment.apiUrl + '/articles')
      .subscribe(
        (articlesData: any[]) => {
          const articlesArr = articlesData.map(a => {
            a = new Article(a.article);
            return a;
          });
          this._pages = Math.ceil(articlesArr.length / this.page);
          this._articles.next(articlesArr)
        },
        (err) => {
          console.log('getArticles error', err);
        }
      );
  }
}
