import {Component, OnDestroy, OnInit} from '@angular/core';
import {FirebaseBlogService, Post} from "../blog.service";
import {ActivatedRoute} from "@angular/router";
import {FirebaseObjectObservable} from "angularfire2";

@Component({
  selector: 'gth-post-update',
  template: `
    <ng-container>
      <gth-post-editor
        [post]="$post | async"
        (imageUpload)="onImageUpload($event)"
        (save)="onUpdate($event)">
      </gth-post-editor>
    </ng-container>
  `,
  styles: []
})
export class PostUpdateComponent implements OnInit {
  $post;
  constructor(
    private blogService: FirebaseBlogService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .map((id: string) => this.$post = this.blogService.getPost(id))
      .subscribe();
  }

  onImageUpload(imageFile: File) {
    console.log(this.$post);
    this.blogService.addImage(this.$post, imageFile);
  }

  onUpdate(updatePost) {
    this.blogService.updatePost(updatePost.$key, updatePost.post);
  }

}
