import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-read-next',
  templateUrl: './read-next.component.html',
  styleUrls: ['./read-next.component.scss']
})
export class ReadNextComponent implements OnInit {
  @Input()
  lang = 'en';

  nextPosts: any;
  topics: any;

  constructor(
    private service: BlogService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.nextPosts = this.service.getRelatedArticles(this.router.url);
    this.topics = this.service.getArticleTopics(this.router.url);
  }

}
