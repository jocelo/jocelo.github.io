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
  selector: 'app-suma-dos-numeros',
  templateUrl: './suma-dos-numeros.component.html',
  styleUrls: ['./suma-dos-numeros.component.scss']
})
export class SumaDosNumerosComponent implements OnInit {
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
    { nomenclatura: '2 <= nums.length <= 10<sup>4</sup>', desc: 'Donde: <br> <span class="inline-code">nums</span> es la lista de números validos (elementos) y el numero máximo de elementos en la lista esta entre 2 y 10^4. En otras palabras, puedes estar seguro que la lista nunca estará vacía; consistirá de al menos dos elementos' },
    { nomenclatura: '-10<sup>9</sup> <= nums[i] <= 10<sup>9</sup>', desc: 'Donde: <br> cada elemento de la lista <span class="inline-code">nums[i]</span> puede tener un valor entre -10^9 y 10^9, en la practica, el rango de valores se define por el valor negativo mínimo y positivo máximo del lenguaje de programación que estés usando.' },
    { nomenclatura: '2 <= target <= 10<sup>4</sup>', desc: 'Donde: <br> <span class="inline-code">target</span> es el numero objetivo que estamos evaluando' },
  ];

  bigODataSource: IbigO[] = [{
    tiempo: 'O(n)', desc: `Donde <br> <span class="inline-code">n = longitud de la lista de números.</span> <br />Tenemos que recorrer la lista de números al menos una vez; y en el peor de los casos, alguno de los sumandos es el ultimo numero de la lista.`
  }, {
    tiempo: 'O(1)', desc: `
    Como usamos un hashmap para leer/escribir. Esta estructura de datos nos permite tener tiempos de ejecución lineales asi que esto no aumenta nuestros tiempo de ejecución.`
  }];

  nextPosts: InextPost[] = [{
    name: 'Balanced brackets',
    url: 'balanced-brackets'
  }];

  postTitle = 'Suma de dos números';
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

    this.topics = this.service.getArticleTopics('suma-dos-numeros');
  }

  drop(event: CdkDragDrop<Vegetable[]>) {
    moveItemInArray(this.sites, event.previousIndex, event.currentIndex);
  }
}
