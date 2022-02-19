import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  fruits: string[] = ['docker', 'angular', 'devops'];
  posts: object[];
  faSearch = faSearch;
  searchToken: string;
  invalidSearchToken: boolean;

  constructor(
    private router: Router,
    private service: BlogService
  ) { }

  ngOnInit() {
    this.invalidSearchToken = false;
    this.posts = [{
      url: 'what-is-a-stack',
      img: 'dishes.png',
      title: 'What is a stack ?',
      desc: 'Brief introduction to the concept of a Stack. Heavily used when optimizing algorithms.',
      publishedDate: this.service.getPostDate('what-is-a-stack')
    }, {
      url: 'que-es-una-pila',
      img: 'dishes.png',
      title: 'Que es una pila ?',
      desc: 'Breve introducción al concepto de pila en estructuras de datos para resolver algoritmos.',
      publishedDate: this.service.getPostDate('que-es-una-pila')
    }, {
      url: 'balanced-brackets',
      img: 'blog_balanced_brackets.png',
      title: 'Balanced Brackets',
      desc: 'How to solve the balanced brackets algorithm.',
      publishedDate: this.service.getPostDate('balanced-brackets')
    }, {
      url: 'balanceo-de-parentesis',
      img: 'blog_balanced_brackets.png',
      title: 'Balanceo de Parentesis',
      desc: 'Como resolver el problema del balanceo de paréntesis.',
      publishedDate: this.service.getPostDate('balanceo-de-parentesis')
    }];

    this.posts.forEach(post=>{
      post['topics'] = this.service.getArticleTopics(post['url']);
    });
  }

  public openArticle(postURL: any): void {
    this.router.navigate([`/blog/${postURL}`]);
  }

  public goSearch(event) {
    this.invalidSearchToken = false;
    if (!this.searchToken || this.searchToken.trim() === '') {
      this.invalidSearchToken = true;
      return;
    }

    this.router.navigate(['/blog/topic/', this.searchToken]);
  }

}
