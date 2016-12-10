/**
 * Created by githop on 11/14/16.
 */

import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable, BehaviorSubject} from "rxjs";
import {environment} from "../../environments/environment";

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
    const snippet = this.content.slice(0,3);
    return new Article ({
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
  private _articles: BehaviorSubject<Array<Article>|Array<ArticleSnippet>> = new BehaviorSubject([]);
  constructor(private http: Http) {
    this._getArticles();
  }

  get articles() {
    return this._articles;
  }

  private _getArticles() {
    return this.http.get(environment.apiUrl + '/articles')
      .map(this.extractData)
      .catch(this.handleError)
      .subscribe(articlesData => {
        const articlesArr =  articlesData.map(a => {
          a = new Article(a.article);
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
