import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ViewportScroller } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, Scroll } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';

import { filter } from 'rxjs/operators';

import { faSearch, faLanguage, faLightbulb, faSpider } from '@fortawesome/free-solid-svg-icons';
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
  selector: 'app-contains-duplicate-es',
  templateUrl: './contains-duplicate-es.component.html',
  styleUrls: ['./contains-duplicate-es.component.scss']
})
export class ContainsDuplicateEsComponent implements OnInit {
  faSearch = faSearch;
  faExclamationCircle = faYoutube;
  faLanguage = faLanguage;
  faLightbulb = faLightbulb;
  faSpider = faSpider;

  sites: PostData[] = [{
    name: 'Leetcode',
    url: 'https://leetcode.com/problems/contains-duplicate/'
  }, {
    name: 'Hackerrank',
    url: ''
  }, {
    name: 'Codewars',
    url: 'https://www.codewars.com/kata/558dd9a1b3f79dc88e000001'
  }, {
    name: 'Codechef',
    url: ''
  }];

  topics: string[];

  the_code: any;
  codeSteps: any;
  jsonData: any;
  pseudoCode: any;

  displayedColumns: string[] = ['nomenclatura', 'desc'];
  displayedColumnsBigO: string[] = ['tiempo', 'desc'];

  restrictionDataSource = [
    { nomenclatura: '1 <= nums.length <= 10<sup>5</sup>', desc: 'Dónde: <br> <span class="inline-code">nums</span> es la lista de numeros; y <i>nums.length</i> es el tamaño de la lista, el cual esta entre 1 y 10<sup>5</sup>. La lista nunca esta vacía.' },
    { nomenclatura: '-10<sup>9</sup> <= nums[i] <= 10<sup>9</sup>', desc: 'Dónde: <br> Cada numero (elemento) de la lista <span class="inline-code">nums[i]</span> tiene un valor entero entre -10<sup>9</sup> y 10<sup>9</sup>.' },
  ];

  postTitle = 'Contains duplicate en español';
  postPicture: {
    src: string;
    desc: string;
  };

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

  ngOnInit(): void {
    this.titleService.setTitle(this.postTitle + ' - Jocelo blog');
    this.postPicture = {
      src: '/assets/blog/markus-krisetya-Vkp9wg-VAsQ-unsplash.jpg',
      desc: 'Foto de <a href="https://unsplash.com/@krisetya?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Markus Krisetya</a> en <a href="https://unsplash.com/s/photos/numbers?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>'
    };
    this.jsonData = code;

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
    this.topics = this.service.getArticleTopics('contains-duplicate');
  }

}
