import { Component, OnInit } from '@angular/core';

import { faSearch, faLanguage, faTimesCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faJsSquare, faPython, faPhp } from '@fortawesome/free-brands-svg-icons';
import { MatTabChangeEvent } from '@angular/material/tabs';

export interface InextPost {
  name: string;
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

  js_code: string;
  py_code: string;
  php_code: string;
  codeSteps: any;

  nextPosts: InextPost[] = [{
    name: 'Balanceo de Paréntesis',
    url: 'balanceo-de-brackets'
  }];

  constructor() { }

  ngOnInit(): void {
    this.lblMode = 'javascript';

    this.js_code = `
    let pila = []; // []

    pila.push(1); // [1]
    pila.push(2); // [1, 2]
    pila.push(3); // [1, 2, 3]
    pila.push(4); // [1, 2, 3, 4]

    pila.pop(); // [1, 2, 3]
    pila.pop(); // [1, 2]
    pila.pop(); // [1] `;

    this.py_code = `
    pila = []; # []

    pila.append(4); # [4]
    pila.append(3); # [4, 3]
    pila.append(2); # [4, 3, 2]
    pila.append(1); # [4, 3, 2, 1]

    pila.pop(); # [4, 3, 2]
    pila.pop(); # [4, 3]
    pila.pop(); # [4] `;

    this.php_code = `
    $stack = []; // []

    array_push($stack, 1); // [1]
    array_push($stack, 2); // [1, 2]
    array_push($stack, 3); // [1, 2, 3]
    array_push($stack, 5);// [1, 2, 3, 5]
    array_push($stack, 8); // [1, 2, 3, 5, 8]

    $current_element = array_pop($stack); // [1, 2, 3, 5]
    $current_element = array_pop($stack); // [1, 2, 3]
    $current_element = array_pop($stack); // [1, 2]
    $current_element = array_pop($stack); // [1]`;

    this.codeSteps = {
      'javascript': [{
        key: 'step1',
        codeLines: [3]
      }, {
        key: 'step2',
        codeLines: [4, 29]
      }, {
        key: 'step3',
        codeLines: [5, 6, 7]
      }, {
        key: 'step4',
        codeLines: [9, 10, 14, 16, 17, 21, 23, 24, 28]
      }, {
        key: 'step5',
        codeLines: [11, 12, 13, 17, 18, 19, 25, 26, 27]
      }, {
        key: 'step6',
        codeLines: [31, 32, 33]
      }, {
        key: 'step7',
        codeLines: [35]
      }],
      'python': [{
        key: 'step1',
        codeLines: [3]
      }, {
        key: 'step2',
        codeLines: [5]
      }, {
        key: 'step3',
        codeLines: [6, 7]
      }, {
        key: 'step4',
        codeLines: [9, 11, 18, 20, 27, 29]
      }, {
        key: 'step4.1',
        codeLines: [10, 11, 12, 13, 19, 20, 21, 22, 28, 29, 30, 31]
      }, {
        key: 'step5',
        codeLines: [15, 16, 24, 25, 33, 34]
      }, {
        key: 'step6',
        codeLines: [36, 37]
      }, {
        key: 'step7',
        codeLines: [39]
      }],
      'php': [{
        key: 'step1',
        codeLines: [3]
      }, {
        key: 'step2',
        codeLines: [6, 33]
      }, {
        key: 'step3',
        codeLines: [9, 10, 11]
      }, {
        key: 'step4',
        codeLines: [13, 14, 20, 21, 27, 28]
      }, {
        key: 'step5',
        codeLines: [15, 16, 17, 22, 23, 24, 29, 30, 31]
      }, {
        key: 'step6',
        codeLines: [35, 36, 37]
      }, {
        key: 'step7',
        codeLines: [39]
      }]
    };

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
