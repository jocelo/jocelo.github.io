import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

import { filter } from 'rxjs/operators';

import { faSearch, faLanguage, faTimesCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { BlogService } from 'src/app/services/blog.service';
import { Router, Scroll } from '@angular/router';

import * as code from './code.json';
export interface InextPost {
  title: string;
  url: string;
}

@Component({
  selector: 'app-que-es-una-cola',
  templateUrl: './que-es-una-cola.component.html',
  styleUrls: ['./que-es-una-cola.component.scss']
})
export class QueEsUnaColaComponent implements OnInit {
  faLanguage = faLanguage;
  faTimesCircle = faTimesCircle;
  faPlusCircle = faPlusCircle;
  faSearch = faSearch;

  theCode: any;
  codeSteps: any;
  jsonData: any;
  pseudoCode: any;
  pseudoNotes: any;

  nextPosts: InextPost[] = [];

  constructor(
    private service: BlogService,
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {
    viewportScroller.setOffset([0, 50]);
    router.events.pipe(filter(e => e instanceof Scroll)).subscribe((e: Scroll) => {
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
  }

  ngOnInit(): void {
    this.jsonData = code;
    this.theCode = {
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
    this.pseudoNotes = this.jsonData.pseudonotes;

    this.nextPosts = this.service.getRelatedArticles(this.router.url);
  }

}
