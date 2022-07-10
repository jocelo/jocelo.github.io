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
  selector: 'app-product-of-array-except-self',
  templateUrl: './product-of-array-except-self.component.html',
  styleUrls: ['./product-of-array-except-self.component.scss']
})
export class ProductOfArrayExceptSelfComponent implements OnInit {
  faSearch = faSearch;
  faExclamationCircle = faYoutube;
  faLanguage = faLanguage;
  faLightbulb = faLightbulb;

  sites: PostData[] = [{
    name: 'Leetcode',
    url: 'https://leetcode.com/problems/product-of-array-except-self/'
  }, {
    name: 'Hackerrank',
    url: 'https://www.hackerrank.com/contests/coding-gym-mo0318/challenges/product-of-array-except-self'
  }, {
    name: 'Codewars',
    url: 'https://www.codewars.com/kata/5a905c2157c562994900009d'
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
    { nomenclatura: '2 <= numbers.length <= 10<sup>5</sup>', desc: 'Where: <br> <span class="inline-code">numbers</span> is the list of numbers and the size of the list falls between 2 and 10<sup>5</sup>. So, the list will never be empty.' },
    { nomenclatura: '-30 <= numbers[i] <= 30', desc: 'Where: <br> Each element on the list <span class="inline-code">numbers[i]</span> is a number between -30 and 30.' },
  ];

  bigODataSource: IbigO[] = [{
    tiempo: 'O(n)', desc: `Where <br> <span class="inline-code">n = list size of prices.</span> <br />We need to go over the entire list just once.`
  }];

  nextPosts: InextPost[] = [{
    name: 'Balanced brackets',
    url: 'balanced-brackets'
  }];

  postTitle = 'Product of Array Except Self';
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
      src: '/assets/blog/faris-mohammed-PQinRWK1TgU-unsplash.jpg',
      desc: 'Photo by <a href="https://unsplash.com/@pkmfaris?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Faris Mohammed</a> on <a href="https://unsplash.com/s/photos/array?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>'
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

}
