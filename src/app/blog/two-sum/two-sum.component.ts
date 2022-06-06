import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, Scroll } from '@angular/router';

import { filter } from 'rxjs/operators';

import { faSearch, faLanguage, faLightbulb } from '@fortawesome/free-solid-svg-icons';

import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { MatTabChangeEvent } from '@angular/material/tabs';

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

export interface InextPost {
  name: string;
  url: string;
}
@Component({
  selector: 'app-two-sum',
  templateUrl: './two-sum.component.html',
  styleUrls: ['./two-sum.component.scss']
})
export class TwoSumComponent implements OnInit {
  faSearch = faSearch;
  faExclamationCircle = faYoutube;
  faLanguage = faLanguage;
  faLightbulb = faLightbulb;

  sites: PostData[] = [{
    name: 'Leetcode',
    url: 'https://leetcode.com/problems/two-sum/'
  }, {
    name: 'Hackerrank',
    url: ''
  }, {
    name: 'Codewars',
    url: 'https://www.codewars.com/kata/52c31f8e6605bcc646000082'
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
    { nomenclatura: '2 <= nums.length <= 10<sup>4</sup>', desc: 'Where: <br> <span class="inline-code">nums</span> represents the list of numbers (or elements) and the maximum size of elements is between 2 and 10<sup>4</sup>. In other words, you can rest assure that the list will never be empty, will have at least two elements.' },
    { nomenclatura: '-10<sup>9</sup> <= nums[i] <= 10<sup>9</sup>', desc: 'Where: <br> Each element on the list <span class="inline-code">nums[i]</span> will have a value between -10<sup>9</sup> and 10<sup>9</sup>, in practice, this range is delimited by the lowest and greatest safe integer value in the language you are using.' },
    { nomenclatura: '2 <= target <= 10<sup>4</sup>', desc: 'Where: <br> <span class="inline-code">target</span> is the target number we are evaluating against.' },
  ];

  bigODataSource: IbigO[] = [{
    tiempo: 'O(n)', desc: `Where <br> <span class="inline-code">n = length of the list.</span> <br />We need to go over the entire list at least once.`
  }, {
    tiempo: 'O(1)', desc: `Since we use a hashmap to write/read. This data structure allows us to have averaged linear time write and read operations so, this will not increment our overall execution time.`
  }];

  nextPosts: InextPost[] = [{
    name: 'Balanced brackets',
    url: 'balanced-brackets'
  }];

  postTitle = 'Two sum';
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
      src: '/assets/blog/michal-matlon-4ApmfdVo32Q-unsplash.jpg',
      desc: 'Photo by <a href="https://unsplash.com/@michalmatlon?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Michal Matlon</a> on <a href="https://unsplash.com/s/photos/math?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>'
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

    this.topics = this.service.getArticleTopics('two-sum');
  }

  drop(event: CdkDragDrop<Vegetable[]>) {
    moveItemInArray(this.sites, event.previousIndex, event.currentIndex);
  }

}
