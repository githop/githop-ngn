import { Component, OnInit } from '@angular/core';
import {BlogService, ArticleModel} from "./blog.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  articles: Array<ArticleModel> = [];
  constructor(private blogService: BlogService) { }

}
