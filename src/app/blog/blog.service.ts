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
  text?: string
  sort_order: number
  created_at: Date
  updated_at: Date
}

export interface Style {
  background?: string
  'margin-bottom'?: string
  color?: string
  width?: string
  padding?: string
}

export interface ArticleSnippet {
  title: string
  id: number
  image?: string
  header?: string
  para?: string
}

export class Article implements ArticleModel, ArticleSnippet {
  public id;
  public title;
  public content;
  constructor(articleData) {
    this.id = articleData.id;
    this.title = articleData.title;
    this.content = articleData.content;
  }

  getSnippet(): ArticleSnippet {
    const snippet = this.content.slice(0,3);
    return {
      id: this.id,
      title: this.title,
      image: snippet[0].href,
      header: snippet[1].text,
      para: snippet[2].text
    };
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

  getStyle(kind, nextKind): Style {
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

  getStyleBlog(kind, nextKind): Style {
    if (kind === 'Header' && nextKind === 'Header' || kind === 'Header' && nextKind === 'Paragraph') {
      return {'background': 'black', 'margin-bottom': '0', 'color': '#f90050'}
    }

    if (kind === 'Paragraph') {
      return { 'background': 'white', 'margin-bottom': '4px' }
    }

    if (kind === 'Paragraph' && nextKind === 'Header' || kind === "Paragraph" && nextKind === null) {
      console.log('wtf');
      // return { 'background': 'white', 'margin-bottom': '4px' }
    }


  }

  private _getArticles() {
    return this.http.get('http://localhost:3000/articles')
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
