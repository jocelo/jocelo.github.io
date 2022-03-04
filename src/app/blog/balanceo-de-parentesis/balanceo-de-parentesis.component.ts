import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, Scroll } from '@angular/router';

import { filter } from 'rxjs/operators';

import { faSearch, faLanguage } from '@fortawesome/free-solid-svg-icons';
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
  selector: 'app-balanceo-de-parentesis',
  templateUrl: './balanceo-de-parentesis.component.html',
  styleUrls: ['./balanceo-de-parentesis.component.scss']
})
export class BalanceoDeParentesisComponent implements OnInit {
  faSearch = faSearch;
  faExclamationCircle = faYoutube;
  faLanguage = faLanguage;

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

  the_code: any;
  topics: string[];
  codeSteps: any;
  jsonData: any;
  pseudoCode: any;

  displayedColumns: string[] = ['nomenclatura', 'desc'];
  displayedColumnsBigO: string[] = ['tiempo', 'desc'];

  restrictionDataSource = [
    { nomenclatura: 'i >= 0', desc: 'Donde: <br> <span class="inline-code">i</span> es la longitud de la cadena' },
    { nomenclatura: 'n[i] = { [ ( ) ] }', desc: 'Donde: <br> cada caracter <span class="inline-code">n[i]</span> puede ser solamente uno de los caracteres validos de la lista' }
  ];

  bigODataSource: IbigO[] = [{
    tiempo: 'O(n)', desc: `Donde: <br> <span class="inline-code">n = longitud del array.</span> <br> Debemos leer todo el array de inicio a fin.`
  }, {
    tiempo: 'O(1)', desc: `Usamos una pila para almacenar todas las ocurrencias de paréntesis de apertura; esta estructura de datos nos permite tener lectura y escritura en tiempo constante.`
  }];

  nextPosts: InextPost[] = [{
    name: 'Balanced brackets',
    url: 'balanced-brackets'
  }];

  postTitle = 'Balanceo de Paréntesis';

  constructor(
    private router: Router,
    private service: BlogService,
    private titleService: Title,
    private viewportScroller: ViewportScroller
  ) {
    this.viewportScroller.setOffset([0, 50]);
    this.router.events.pipe(filter(e => e instanceof Scroll)).subscribe((e: Scroll) => {
      console.log(e);
      if (e.anchor) {
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(e.anchor);
        });
      } else {
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
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

    this.topics = this.service.getArticleTopics('balanceo-de-parentesis');
  }

  drop(event: CdkDragDrop<Vegetable[]>) {
    moveItemInArray(this.sites, event.previousIndex, event.currentIndex);
  }
}
