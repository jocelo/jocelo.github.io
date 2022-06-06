import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, Scroll } from '@angular/router';
import { filter } from 'rxjs/operators';
import { PostData, Vegetable, IbigO, InextPost } from '../blog.interfaces';

import { faSearch, faLanguage, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

import * as code from './code.json';
import { BlogService } from 'src/app/services/blog.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-best-time-to-buy-and-sell-stock-es',
  templateUrl: './best-time-to-buy-and-sell-stock-es.component.html',
  styleUrls: ['./best-time-to-buy-and-sell-stock-es.component.scss']
})
export class BestTimeToBuyAndSellStockEsComponent implements OnInit {
  faSearch = faSearch;
  faExclamationCircle = faYoutube;
  faLanguage = faLanguage;
  faLightbulb = faLightbulb;

  sites: PostData[] = [{
    name: 'Leetcode',
    url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/'
  }, {
    name: 'Hackerrank',
    url: 'https://www.hackerrank.com/challenges/stockmax/problem'
  }, {
    name: 'Codewars',
    url: 'https://www.codewars.com/kata/58f174ed7e9b1f32b40000ec'
  }, {
    name: 'Codechef',
    url: ''
  }];

  the_code: any;
  topics: string[];
  codeSteps: any;
  jsonData: any;
  pseudoCode: any;

  displayedColumns: string[] = ['nomenclatura', 'desc'];
  displayedColumnsBigO: string[] = ['tiempo', 'desc'];

  restrictionDataSource = [
    { nomenclatura: '1 <= prices.length <= 10<sup>5</sup>', desc: 'Where: <br> <span class="inline-code">prices</span> represents the list of sotck prices and the maximum size of the list falls between 1 and 10<sup>5</sup>. So, the list will never be empty.' },
    { nomenclatura: '0 <= prices[i] <= 10<sup>4</sup>', desc: 'Where: <br> Each element on the list <span class="inline-code">prices[i]</span> is the stock price at that day and will have a value between 0 and 10<sup>4</sup>, in practice, this range is delimited by the lowest and greatest safe integer value in the language you are using.' },
  ];

  bigODataSource: IbigO[] = [{
    tiempo: 'O(n)', desc: `Where <br> <span class="inline-code">n = list size of prices.</span> <br />We need to go over the entire list just once.`
  }];

  nextPosts: InextPost[] = [{
    name: 'Balanced brackets',
    url: 'balanced-brackets'
  }];

  postTitle = 'Best Time to Buy and Sell Stock';
  postPicture: {
    src: string;
    desc: string;
  };

  constructor(
    private router: Router,
    private service: BlogService,
    private titleService: Title,
    private viewportScroller: ViewportScroller
  ) {
    this.viewportScroller.setOffset([0, 50]);
    this.router.events.pipe(filter(e => e instanceof Scroll)).subscribe((e: Scroll) => {
      if (e.anchor) {
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(e.anchor);
        });
      } else {
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.postTitle + ' - Jocelo blog');
    this.jsonData = code;
    this.postPicture = {
      src: '/assets/blog/nicholas-cappello-Wb63zqJ5gnE-unsplash.jpg',
      desc: 'Foto de <a href="https://unsplash.com/@bash__profile?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Nicholas Cappello</a> en <a href="https://unsplash.com/s/photos/stock?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>'
    };

    this.the_code = {
      java_code: this.jsonData.java.code.join('\n'),
      js_code: this.jsonData.javascript.code.join('\n'),
      py_code: this.jsonData.python.code.join('\n'),
      php_code: this.jsonData.php.code.join('\n')
    };
    this.codeSteps = {
      'java': this.jsonData.java.steps,
      'javascript': this.jsonData.javascript.steps,
      'python': this.jsonData.python.steps,
      'php': this.jsonData.php.steps
    };
    this.pseudoCode = this.jsonData.pseudocode;

    let wholeUrl: string[] = this.router.url.split('/');
    let url: string = wholeUrl[wholeUrl.length - 1];

    this.topics = this.service.getArticleTopics(url);
  }

  drop(event: CdkDragDrop<Vegetable[]>) {
    moveItemInArray(this.sites, event.previousIndex, event.currentIndex);
  }

}