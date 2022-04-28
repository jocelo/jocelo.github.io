import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.scss']
})
export class WriterComponent implements OnInit {
  publishedDate: string;

  @Input() lang = 'en';
  @Input() readTime = '5';

  constructor(
    private service: BlogService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.publishedDate = this.service.getPostDate(this.router.url);
  }

}
