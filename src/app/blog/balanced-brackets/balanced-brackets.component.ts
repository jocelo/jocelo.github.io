import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ViewportScroller } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, Scroll } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';

import { filter } from 'rxjs/operators';

import { faSearch, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

import * as code from './code.json';
import { BlogService } from 'src/app/services/blog.service';
import { Title } from '@angular/platform-browser';

export interface PostData {
  name: string;
  url?: string;
}

export interface Vegetable {
  name: string;
}

export interface IbigO {
  tiempo: string;
  desc: string;
}

@Component({
  selector: 'app-balanced-brackets',
  templateUrl: './balanced-brackets.component.html',
  styleUrls: ['./balanced-brackets.component.scss']
})
export class BalancedBracketsComponent implements OnInit {
  faSearch = faSearch;
  faYoutube = faYoutube;
  faLanguage = faLanguage;
  postTitle = 'Balanced Brackets';

  sites: PostData[] = [{
    name: 'Leetcode',
    url: 'https://leetcode.com/problems/valid-parentheses/'
  }, {
    name: 'Hackerrank',
    url: 'https://www.hackerrank.com/challenges/balanced-brackets/problem'
  }, {
    name: 'Codewars',
    url: 'https://www.codewars.com/kata/52774a314c2333f0a7000688'
  }, {
    name: 'Codechef',
    url: 'https://www.codechef.com/problems/RNT011'
  }];

  topics: string[];

  the_code: any;
  codeSteps: any;
  jsonData: any;
  pseudoCode: any;

  displayedColumns: string[] = ['nomenclatura', 'desc'];
  displayedColumnsBigO: string[] = ['tiempo', 'desc'];

  restrictionDataSource = [
    { nomenclatura: 'i >= 0', desc: 'Where: <br> <span class="inline-code">i</span> represents the length of the string.' },
    { nomenclatura: 'n[i] = { [ ( ) ] }', desc: 'Where: <br> each character <span class="inline-code">n[i]</span> is just one of the valid characters/brackets from the list' }
  ];

  bigODataSource: IbigO[] = [{
    tiempo: 'O(n)', desc: `Where: <br> <span class="inline-code">n = length of the string.</span> <br> We have to read the entire array.`
  }, {
    tiempo: 'O(1)', desc: `We are using a stack to store all the opening brackets; this Data Structure gives us a read/write constant access time.`
  }];

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  navbarStatus: boolean;

  constructor(
    private router: Router,
    private service: BlogService,
    private titleService: Title,
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    viewportScroller: ViewportScroller
  ) {
    viewportScroller.setOffset([0, 50]);
    this.router.events.pipe(filter(e => e instanceof Scroll)).subscribe((e: Scroll) => {
      if (e.anchor) {
        // anchor navigation
        /* setTimeout is the core line to solve the solution */
        setTimeout(() => {
          viewportScroller.scrollToAnchor(e.anchor);
        })
      } else if (e.position) {
        // backward navigation
        viewportScroller.scrollToPosition(e.position);
      } else {
        // forward navigation
        viewportScroller.scrollToPosition([0, 0]);
      }
    });

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit() {
    this.titleService.setTitle(this.postTitle + ' - Alfredo blog');
    this.jsonData = code;

    this.the_code = {
      js_code: this.jsonData.javascript.code.join('\n'),
      py_code: this.jsonData.python.code.join('\n'),
      php_code: this.jsonData.php.code.join('\n')
    };
    this.codeSteps = {
      'javascript': this.jsonData.javascript.steps,
      'python': this.jsonData.python.steps,
      'php': this.jsonData.php.steps
    };
    this.pseudoCode = this.jsonData.pseudocode;
    this.topics = this.service.getArticleTopics('balanced-brackets');
  }
}
