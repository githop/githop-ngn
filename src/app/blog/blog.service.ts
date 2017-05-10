/**
 * Created by githop on 11/14/16.
 */

import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable, BehaviorSubject} from "rxjs";
import {environment} from "../../environments/environment";
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {UploadsService} from "./uploads.service";
import {falseIfMissing} from "protractor/built/util";

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

export interface Post {
  $key: string
  title: string
  date: Date
  images: string[]
  rawText: string
  html: string
}

export interface tmpPost {
  title?: string
  date?: Date
  images?: [{name: string, url: string}]
  rawText?: string
  html?: string
}

@Injectable()
export class FirebaseBlogService {
  private $postsList: FirebaseListObservable<Post[]>;
  private $posts = {};

  constructor(private af: AngularFire, private uploader: UploadsService) {
    this.$postsList = af.database.list('/posts');
  }

  get posts() {
    return this.$postsList;
  }

  getPost(id: string) {
    if (this.$posts[id] == null) {
      this.$posts[id] = this.af.database.object(`/posts/${id}`);
    }
    return this.$posts[id];
  }

  updatePost($key, post) {
    console.log('huh', this.$posts);
    this.$posts[$key].update(post);
  }

  addPost(post: tmpPost) {
    if (post != null) {
      this.$postsList.push(post);
    }
  }

  removePost($key) {
    this.$postsList.remove($key);
  }

  addImage(p, imageFile) {
    p.map(post => {
      this.uploader.uploadPostImage(post.$key, post.title, imageFile)
        .then(imageRef => {
          return {url: imageRef.downloadURL, name: imageRef.metadata.name}
        })
        .then(imageObj => {
          if (post.images) {
            post.images.push(imageObj);
          } else {
            post.images = [imageObj];
          }
          return this.updatePost(post.$key, post);
        })
        .then(_ => console.log('success?'));
    })
      .first()
      .subscribe();
    // this.uploader.uploadPostImage(post.$key, post.title, imageFile)
    //   .then(fileRef => fileRef.downloadURL)
    //   .then(url => this.updatePost(post.$key, post))
    //   .catch(e => console.log('error adding image', e));
  }
}


@Injectable()
export class BlogService {
  private _articles: BehaviorSubject<Array<Article>|Array<ArticleSnippet>> = new BehaviorSubject([]);
  private _page = 4;
  private _pages;
  constructor(private http: Http) {
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
      .map(this.extractData)
      .catch(this.handleError)
      .subscribe(articlesData => {
        const articlesArr =  articlesData.map(a => {
          a = new Article(a.article);
          return a;
        });
        this._pages = Math.ceil(articlesArr.length / this.page);
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
