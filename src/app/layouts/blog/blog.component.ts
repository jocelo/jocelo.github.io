import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts = [];
  constructor() { }

  ngOnInit() {
    this.posts = [
      {id: 1, title: 'Basic css shapes Go'},
      {id: 2, title: 'Searching for a Job in tech'},
      {id: 3, title: 'Latin guy in tech'}
    ];
  }

}
