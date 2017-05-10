import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'gth-post-editor',
  styles: [`
    .uploaded-images {
      width: 250px;
      height: auto;
    }
  `],
  template: `
    <ng-container *ngIf="post">
      <div class="wrapper">
       
        <div>
          <label>upload image</label>
          <input type="file" (change)="handleImage($event)">
          
          <div>
            <span *ngFor="let photo of post.images">
              <img class="uploaded-images" [src]="photo.url" alt="{{photo.name}}">
            </span>
          </div>
        </div>
        
        <div>
          <label for="title">Title</label>
          <input id="title" type="text" [(ngModel)]="post.title">
          
          <label for="date">Date</label>
          <input id="date" type="datetime" [(ngModel)]="post.date">
        </div>
        
        <div>
          <label for="post">Post</label>
          <textarea id="post" rows="10" cols="10" [(ngModel)]="post.rawText"></textarea>
        </div>
        
        <div>
          <gth-markdown [text]="post.rawText" (html)="handleOutput($event)"></gth-markdown>
        </div>
        
      </div>
      <div class="action">
        <button (click)="onSave()">save</button>
        <button (click)="cancel.emit()">cancel</button>
      </div>
    </ng-container>
  `
})
export class PostEditorComponent implements OnInit {
  @Input() post;
  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Output() imageUpload = new EventEmitter();
  html: string;
  ngOnInit() {}

  handleOutput(html) {
    this.post.html = html;
  }

  handleImage(ev) {
    this.imageUpload.emit(ev.target.files[0]);
  }

  onSave() {
    const newPost = {
      title: this.post.title,
      date: this.post.date.toString(),
      rawText: this.post.rawText,
      html: this.post.html
    };

    if (this.post.$key != null) {
      this.save.emit({$key: this.post.$key, post: newPost});
      return
    }

    this.save.emit(newPost);
  }


}
