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
      url: 'format-on-save-vscode',
      img: 'vscode_tip.png',
      title: 'VSCode tip: Format files on Save.',
      desc: 'Auto-format your files every time you save will help you increase your productivity. You can forget about those small things when coding and focus on your main logic.',
      publishedDate: this.service.getPostDate('format-on-save-vscode')
    }, {
      url: 'what-is-a-queue',
      img: 'queue.png',
      title: 'What is a queue ?',
      desc: 'Brief introduction to the concept of a Queue. Heavily used when optimizing algorithms. Also briefly discussed a more optimal implementation.',
      publishedDate: this.service.getPostDate('what-is-a-queue')
    }, {
      url: 'que-es-una-cola',
      img: 'queue.png',
      title: 'Que es una cola ?',
      desc: 'Breve introducción al concepto de colas en estructuras de datos para resolver algoritmos. Incluye una breve discusión acerca de una implementación mas optima',
      publishedDate: this.service.getPostDate('que-es-una-cola')
    }, {
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

    this.posts.forEach(post => {
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
