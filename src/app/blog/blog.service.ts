/**
 * Created by githop on 11/14/16.
 */

import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable, BehaviorSubject} from "rxjs";

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
  sort_order: number
  created_at: Date
  updated_at: Date
}

export class Article implements ArticleModel {
  public id;
  public title;
  public content;
  constructor(articleData) {
    this.id = articleData.id;
    this.title = articleData.title;
    this.content = articleData.content;
  }
}

@Injectable()
export class BlogService {
  private _articles: BehaviorSubject<Array<Article>> = new BehaviorSubject([]);
  constructor(private http: Http) {
    console.log('i found you!');
    this._getArticles();
  }

  get articles() {
    return this._articles;
  }


  private _getArticles() {
    return this.http.get('http://localhost:3000/articles')
      .map(this.extractData)
      .catch(this.handleError)
      .subscribe(articlesData => {
        const articlesArr =  articlesData.map(a => {
          a = new Article(a.article);
          // console.log('article', a);
          return a;
        });
        this._articles.next(articlesArr)
      });
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
