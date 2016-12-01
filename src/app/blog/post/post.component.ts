import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {BlogService, Article} from "../blog.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  article: Article;

  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit(): void {

    this.route.params.forEach((p: Params) => {
      this.blogService.articles.subscribe((articles: Array<Article>) => {
        this.article = articles.find(a => a.id === +p['id'])
      })
    });

    window.scrollTo(0,0);
  }

}
