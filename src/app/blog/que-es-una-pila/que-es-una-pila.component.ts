import { Component, OnInit } from '@angular/core';

import { faSearch, faLanguage, faTimesCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faJsSquare, faPython, faPhp } from '@fortawesome/free-brands-svg-icons';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { BlogService } from 'src/app/services/blog.service';
import { Router } from '@angular/router';

import * as code from './code.json';

export interface InextPost {
  title: string;
  url: string;
}

@Component({
  selector: 'app-que-es-una-pila',
  templateUrl: './que-es-una-pila.component.html',
  styleUrls: ['./que-es-una-pila.component.scss']
})
export class QueEsUnaPilaComponent implements OnInit {
  lineByLine: Boolean = false;
  lblMode: string;
  faJsSquare = faJsSquare;
  faPython = faPython;
  faPhp = faPhp;
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
    private router: Router
  ) { }

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
