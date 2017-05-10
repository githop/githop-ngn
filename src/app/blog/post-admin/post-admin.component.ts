import { Component, OnInit } from '@angular/core';
import {FirebaseBlogService} from "../blog.service";
import {FirebaseListObservable} from "angularfire2";

@Component({
  selector: 'gth-post-admin',
  template: `    
    
    <div>
      <h4>Add new post</h4>
      
      <button (click)="addTmp()">add</button>
      <div *ngIf="tmpPost != null">
        <gth-post-editor [post]="tmpPost" (save)="handleSave($event)" (cancel)="tmpPost = null"></gth-post-editor>
      </div>
    </div>
    <div>
      
      <div *ngFor="let post of $posts | async">
        <h3>{{post.title}}</h3>
        
        <a [routerLink]="['/post', post.$key, 'edit']">edit</a>
        <button (click)="deletePost(post.$key)">delete</button>
      </div>
      
    </div>
    
  `,
  styles: []
})
export class PostAdminComponent implements OnInit {
  tmpPost = null;
  $posts: FirebaseListObservable<any[]>;
  constructor(private blogService: FirebaseBlogService) {
    this.$posts = blogService.posts;
  }

  ngOnInit() {
  }

  addTmp() {
    this.tmpPost = { date: new Date() };
  }

  handleSave(post) {
    console.log('post!', post);
    this.blogService.addPost(post);
    this.tmpPost = null;
  }

  deletePost($key) {
    this.blogService.removePost($key);
  }

}
