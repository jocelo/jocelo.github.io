import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  fruits: string[] = ['docker', 'angular', 'devops'];
  posts: object[];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.posts = [{
      url: 'balanced-brackets',
      img: 'blog_balanced_brackets.png',
      title: 'Balanced Brackets',
      desc: 'How to solve the balanced brackets algorithm.',
      publishedDate: 'June 20, 2021',
      topics: ['algorithm']
    }, {
      url: 'balanceo-de-parentesis',
      img: 'blog_balanced_brackets.png',
      title: 'Balanceo de Parentesis',
      desc: 'Como resolver el problema del balanceo de parentesis.',
      publishedDate: 'Junio 20, 2021',
      topics: ['algorithm']
    }];
  }

  openArticle(postURL: any): void {
    this.router.navigate([`/blog/${postURL}`]);
  }

}
