import { Component, OnInit } from '@angular/core';

import { faSearch, faLanguage, faTimesCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faJsSquare, faPython, faPhp } from '@fortawesome/free-brands-svg-icons';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { BlogService } from 'src/app/services/blog.service';
import { Router } from '@angular/router';

export interface InextPost {
  title: string;
  url: string;
}

@Component({
  selector: 'app-what-is-a-stack',
  templateUrl: './what-is-a-stack.component.html',
  styleUrls: ['./what-is-a-stack.component.scss']
})
export class WhatIsAStackComponent implements OnInit {
  lineByLine: Boolean = false;
  lblMode: string;
  faJsSquare = faJsSquare;
  faPython = faPython;
  faPhp = faPhp;
  faLanguage = faLanguage;
  faTimesCircle = faTimesCircle;
  faPlusCircle = faPlusCircle;
  faSearch = faSearch;

  js_code: string;
  py_code: string;
  php_code: string;
  codeSteps: any;

  nextPosts: InextPost[] = [];
  constructor(
    private service: BlogService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.lblMode = 'javascript';

    this.js_code = `
    let pila = []; // []

    pila.push(1); // [1]
    pila.push(2); // [1, 2]
    pila.push(3); // [1, 2, 3]
    pila.push(4); // [1, 2, 3, 4]

    pila.pop(); // [1, 2, 3] => 4
    pila.pop(); // [1, 2] => 3
    pila.pop(); // [1] => 2
    pila.pop(); // [0] => 1

    `;

    this.py_code = `
    pila = [] # []

    pila.append(4) # [4]
    pila.append(3) # [4, 3]
    pila.append(2) # [4, 3, 2]
    pila.append(1) # [4, 3, 2, 1]

    pila.pop() # [4, 3, 2] => 1
    pila.pop() # [4, 3] => 2
    pila.pop() # [4] => 3

    `;

    this.php_code = `
    $stack = []; // []

    array_push($stack, 1); // [1]
    array_push($stack, 2); // [1, 2]
    array_push($stack, 3); // [1, 2, 3]
    array_push($stack, 5); // [1, 2, 3, 5]
    array_push($stack, 8); // [1, 2, 3, 5, 8]

    $current_element = array_pop($stack); // [1, 2, 3, 5] => 8
    $current_element = array_pop($stack); // [1, 2, 3] => 5
    $current_element = array_pop($stack); // [1, 2] => 3
    $current_element = array_pop($stack); // [1] => 2
    $current_element = array_pop($stack); // [0] => 1

    `;

    this.codeSteps = {
      'javascript': [{
        key: 'step1',
        codeLines: [2]
      }, {
        key: 'step2',
        codeLines: [4]
      }, {
        key: 'step3',
        codeLines: [5, 6, 7]
      }, {
        key: 'step4',
        codeLines: [9]
      }, {
        key: 'step5',
        codeLines: [10, 11, 12]
      }],
      'python': [{
        key: 'step1',
        codeLines: [2]
      }, {
        key: 'step2',
        codeLines: [4]
      }, {
        key: 'step3',
        codeLines: [5, 6, 7]
      }, {
        key: 'step4',
        codeLines: [9]
      }, {
        key: 'step5',
        codeLines: [9, 10, 11]
      }],
      'php': [{
        key: 'step1',
        codeLines: [2]
      }, {
        key: 'step2',
        codeLines: [4]
      }, {
        key: 'step3',
        codeLines: [5, 6, 7, 8]
      }, {
        key: 'step4',
        codeLines: [10]
      }, {
        key: 'step5',
        codeLines: [11, 12, 13, 14]
      }]
    };

    this.nextPosts = this.service.getRelatedArticles(this.router.url);
  }

  public toggleLineByLine(): void {
    this.lineByLine = !this.lineByLine;
  }

  public showNotes(): boolean {
    if (this.lblMode === 'python') {
      return true;
    }
    return false;
  }

  public showTheThing(event: MouseEvent): void {
    const currentStep: string = event.target['id'];
    if (!currentStep) {
      return;
    }
    const codingSteps = this.codeSteps[this.lblMode];

    codingSteps.forEach(step => {
      if (step.key === currentStep) {
        const selector = step.codeLines.map(line => `td[data-line-number='${line}']`).join();
        const domElms = document.querySelectorAll(selector);
        domElms.forEach(elm => {
          elm.classList.add('hover-code-highlight');
        });
      }
    });
  }

  public hideTheThing(): void {
    document.querySelectorAll('td.hover-code-highlight').forEach(elm => {
      elm.classList.remove('hover-code-highlight');
    });
  }

  public myTabFocusChange(changeEvent: MatTabChangeEvent): void {
    this.lblMode = changeEvent.tab.textLabel;
  }

}
