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
  allPosts: any;
  posts: object[] | void[];
  faSearch = faSearch;
  searchToken: string;
  invalidSearchToken: boolean;
  langMode: string;

  constructor(
    private router: Router,
    private service: BlogService
  ) { }

  ngOnInit() {
    this.langMode = 'en';

    this.invalidSearchToken = false;
    this.allPosts = [{
      url: 'product-of-array-except-self',
      img: 'blog/faris-mohammed-PQinRWK1TgU-unsplash.jpg',
      imgDesc: 'Photo by <a href="https://unsplash.com/@pkmfaris?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Faris Mohammed</a> on <a href="https://unsplash.com/s/photos/array?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>',
      title: 'Product of Array Except Self: Blind 75 - 4/75',
      desc: 'We discuss an optimal solution for Product of Array Except Self problem. This is the fourth problem in the array group from the Blind 75 series.',
      lang: 'en',
      readTime: '7',
      publishedDate: this.service.getPostDate('product-of-array-except-self')
    }, {
      url: 'contains-duplicate',
      img: 'blog/markus-krisetya-Vkp9wg-VAsQ-unsplash.jpg',
      imgDesc: 'Photo by <a href="https://unsplash.com/@krisetya?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Markus Krisetya</a> on <a href="https://unsplash.com/s/photos/numbers?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>',
      title: 'Contains Duplicate: Blind 75 - 3/75',
      desc: 'We analyze the approach for tackling the Contains Duplicate problem using a HashTable. Third problem in the array group from the Blind 75 series.',
      lang: 'en',
      readTime: '5',
      publishedDate: this.service.getPostDate('contains-duplicate')
    }, {
      url: 'best-time-to-buy-and-sell-stock',
      img: 'blog/best-time-to-buy-and-sell-stock.jpg',
      imgDesc: 'Photo by <a href="https://unsplash.com/@bash__profile?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Nicholas Cappello</a> on <a href="https://unsplash.com/s/photos/stock?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>',
      title: 'Best time to buy and sell stock: Blind 75 - 2/75',
      desc: 'We discuss the approach for solving the Best Time to Buy and Sell Stock problem as we get an introduction to dynamic programming. Second problem of the Blind 75 series.',
      lang: 'en',
      readTime: '7',
      publishedDate: this.service.getPostDate('best-time-to-buy-and-sell-stock')
    }, {
      url: 'two-sum',
      img: 'blog/two-sum.jpg',
      imgDesc: 'Photo by <a href="https://unsplash.com/@michalmatlon?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Michal Matlon</a> on <a href="https://unsplash.com/s/photos/math?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>',
      title: 'Two Sum: Blind 75 - 1/75',
      desc: 'We analyze the solution for solving the Two Sum problem using a hashtable; an abstract data type with many use cases. This is the first article of a series dedicated to Blind 75 leetcode algorithms.',
      lang: 'en',
      readTime: '6',
      publishedDate: this.service.getPostDate('two-sum')
    }, {
      url: 'suma-dos-numeros',
      img: 'blog/two-sum.jpg',
      imgDesc: 'Photo by <a href="https://unsplash.com/@michalmatlon?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Michal Matlon</a> on <a href="https://unsplash.com/s/photos/math?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>',
      title: 'Suma de dos numeros: Blind 75 - 1/75',
      desc: 'Primer problema listado en el famoso post de Blind: 75 algoritmos de Leetcode. Two sum; Usamos hashtables parar resolver este problema.',
      lang: 'es',
      readTime: '6',
      publishedDate: this.service.getPostDate('suma-dos-numeros')
    }, {
      url: 'delete-code-line',
      img: 'blog/deleting-code.jpg',
      imgDesc: '',
      title: 'Deleting code, one line at a time.',
      desc: 'Tip on how to delete code in VS Code: The shortest way to delete a single line of code in VS Code.',
      lang: 'en',
      publishedDate: this.service.getPostDate('urls-dinamicos')
    }, {
      url: 'urls-dinamicos',
      img: 'blog/christian-wiediger-WkfDrhxDMC8-unsplash.jpg',
      imgDesc: '',
      title: 'URL\s dinámicos.',
      desc: 'Tip de productividad para que le saques el máximo provecho a los sitios que visitas frecuentemente y solo cambia una pequeña parte de la URL. Revisamos las configuraciones necesarias para usarse en Chrome, Firefox y Brave.',
      lang: 'es',
      publishedDate: this.service.getPostDate('urls-dinamicos')
    }, {
      url: 'format-documents-on-save',
      img: 'blog/vscode_tip.png',
      imgDesc: '',
      title: 'VSCode tip: Format files on Save.',
      desc: 'Auto-format your files every time you save will help you increase your productivity. You can forget about those small things when coding and focus on your main logic.',
      lang: 'en',
      publishedDate: this.service.getPostDate('format-documents-on-save')
    }, {
      url: 'what-is-a-queue',
      img: 'blog/queue.png',
      imgDesc: '',
      title: 'What is a queue ?',
      desc: 'Brief introduction to the concept of a Queue. Heavily used when optimizing algorithms. Also briefly discussed a more optimal implementation.',
      lang: 'en',
      publishedDate: this.service.getPostDate('what-is-a-queue')
    }, {
      url: 'que-es-una-cola',
      img: 'blog/queue.png',
      imgDesc: '',
      title: 'Que es una cola ?',
      desc: 'Breve introducción al concepto de colas en estructuras de datos para resolver algoritmos. Incluye una breve discusión acerca de una implementación mas optima',
      lang: 'es',
      publishedDate: this.service.getPostDate('que-es-una-cola')
    }, {
      url: 'what-is-a-stack',
      img: 'blog/dishes.png',
      imgDesc: '',
      title: 'What is a stack ?',
      desc: 'Brief introduction to the concept of a Stack. Heavily used when optimizing algorithms.',
      lang: 'en',
      publishedDate: this.service.getPostDate('what-is-a-stack')
    }, {
      url: 'que-es-una-pila',
      img: 'blog/dishes.png',
      imgDesc: '',
      title: 'Que es una pila ?',
      desc: 'Breve introducción al concepto de pila en estructuras de datos para resolver algoritmos.',
      lang: 'es',
      publishedDate: this.service.getPostDate('que-es-una-pila')
    }, {
      url: 'balanced-brackets',
      img: 'blog/blog_balanced_brackets.png',
      imgDesc: '',
      title: 'Balanced Brackets.',
      desc: 'How to solve the balanced brackets algorithm.',
      lang: 'en',
      publishedDate: this.service.getPostDate('balanced-brackets')
    }, {
      url: 'balanceo-de-parentesis',
      img: 'blog/blog_balanced_brackets.png',
      imgDesc: '',
      title: 'Balanceo de Parentesis.',
      desc: 'Como resolver el problema del balanceo de paréntesis.',
      lang: 'es',
      publishedDate: this.service.getPostDate('balanceo-de-parentesis')
    }];

    this.allPosts.forEach(post => {
      post['topics'] = this.service.getArticleTopics(post['url']);
      post['flag'] = post['lang'] === 'es' ? 'assets/mx.svg' : 'assets/us.svg';
      // post['lang'] = post['lang'] === 'es' ? 'Español' : 'Ingles';
    });

    this.posts = this.allPosts.filter(post => post.lang === this.langMode);
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

  public changeLanguage(lang: string): void {
    this.langMode = lang;
    this.posts = this.allPosts.filter(post => post.lang === lang);
  }

}
