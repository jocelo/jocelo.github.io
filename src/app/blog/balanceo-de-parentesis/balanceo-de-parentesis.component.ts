import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { Router, Scroll } from '@angular/router';

import { filter } from 'rxjs/operators';

import { faSearch, faRulerHorizontal, faBatteryHalf, faExpandArrowsAlt, faTimesCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faJsSquare, faPython, faPhp } from '@fortawesome/free-brands-svg-icons';
import { MatTabChangeEvent } from '@angular/material/tabs';

export interface PostData {
  name: string;
  url?: string;
}

export interface Vegetable {
  name: string;
}

export interface RestrictElement {
  nomenclatura: string;
  desc: string;
}

export interface ICodeStep {
  key: string;
  codeLines: number[];
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
  styleUrls: ['./balanceo-de-parentesis.component.css']
})
export class BalanceoDeParentesisComponent implements OnInit {
  @ViewChildren('jscode') jscodeSection;

  faSearch = faSearch;
  faRulerHorizontal = faRulerHorizontal;
  faBatteryHalf = faBatteryHalf;
  faExclamationCircle = faYoutube;
  faPlusCircle = faPlusCircle;
  faTimesCircle = faTimesCircle;
  faJsSquare = faJsSquare;
  faPython = faPython;
  faPhp = faPhp;
  lineByLine: Boolean = false;
  lblMode: string;

  js_code: string;
  py_code: string;
  php_code: string;
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

  topics: string[] = ['arrays', 'pilas'];

  codeSteps: any;

  icons: any;

  displayedColumns: string[] = ['nomenclatura', 'desc'];
  displayedColumnsBigO: string[] = ['tiempo', 'desc'];

  restrictionDataSource = [
    { nomenclatura: 'i >= 0', desc: 'Donde: <br> <span class="inline-code">i</span> es la longitud de la cadena' },
    { nomenclatura: 'n[i] = { [ ( ) ] }', desc: 'Donde: <br> cada caracter <span class="inline-code">n[i]</span> puede ser solamente uno de los caracteres validos de la lista' }
  ];

  bigODataSource: IbigO[] = [{
    tiempo: 'O(n)', desc: `Donde: <br> <span class="inline-code">n = longuitud del array.</span> <br> Debemos leer todo el array de inicio a fin.`
  }, {
    tiempo: 'O(1)', desc: `Usamos una pila para almacenar todas las ocurrencias de parentesis de apertura; como sabemos, usando esta estructura de datos podemos tener lectura y escritura de manera constante.`
  }];

  nextPosts: InextPost[] = [{
    name: 'Balanced brackets',
    url: 'balanced-brackets'
  }, {
    name: 'Docker + Angular',
    url: 'dockerize-angular'
  }];

  constructor(
    router: Router,
    viewportScroller: ViewportScroller
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

  ngOnInit() {
    this.lblMode = 'javascript';

    this.js_code = `
  function balanceo(theString) {
    const pila = [];
    for (let par of theString) {
      if (par == '(' || par == '{' || par == '[') {
        pila.push(par);
      }

      if (par == ')') {
        const parApertura = pila.pop();
        if (parApertura != '(') {
          return false;
        }
      }

      if (par == '}') {
        const parApertura = pila.pop();
        if (parApertura != '{') {
          return false;
        }
      }

      if (par == ']') {
        const parApertura = pila.pop();
        if (parApertura != '[') {
          return false;
        }
      }
    }

    if (pila.length > 0) {
      return false;
    }

    return true;
  }`;

    this.py_code = `
  def balanceo(the_string):
    pila = []

    for par in the_string:
      if par == '(' or par == '{' or par == '[':
        pila.append(par)

      if par == ')':
        try:
          parApertura = pila.pop()
        except:
          return False

        if parApertura != '(':
          return False

      if par == '}':
        try:
          parApertura = pila.pop()
        except:
          return False

        if parApertura != '{':
          return False

      if par == ']':
        try:
          parApertura = pila.pop()
        except:
          return False

        if parApertura != '[':
          return False

    if len(pila) > 0:
      return False

    return True`;

    this.php_code = `
  function balanced($the_string) {
    $stack = [];
    $len = strlen($the_string);

    for ($i=0 ; $i<$len ; $i++) {
      $par = $the_string[$i];

      if (in_array($par, ['(', '{', '['])) {
        array_push($stack, $par);
      }

      if ($par == ')') {
        $parOpen = array_pop($stack);
        if ($parOpen != '(') {
          return false;
        }
      }

      if ($par == '}') {
        $parOpen = array_pop($stack);
        if ($parOpen != '{') {
          return false;
        }
      }

      if ($par == ']') {
        $parOpen = array_pop($stack);
        if ($parOpen != '[') {
          return false;
        }
      }
    }

    if (count($stack) > 0) {
      return false;
    }

    return true;
  }`;

    this.icons = {
      'arrays': faRulerHorizontal,
      'pilas': faBatteryHalf
    };

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

  drop(event: CdkDragDrop<Vegetable[]>) {
    moveItemInArray(this.sites, event.previousIndex, event.currentIndex);
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
    const codintSteps = this.codeSteps[this.lblMode];

    codintSteps.forEach(step => {
      if (step.key === currentStep) {
        const selector = step.codeLines.map(line => `td[data-line-number='${line}']`).join();
        const domelms = document.querySelectorAll(selector);
        domelms.forEach(elm => {
          elm.classList.add('hover-code-hightlight');
        });
      }
    });
  }

  public hideTheThing(): void {
    document.querySelectorAll('td.hover-code-hightlight').forEach(elm => {
      elm.classList.remove('hover-code-hightlight');
    });
  }

  public myTabFocusChange(changeEvent: MatTabChangeEvent): void {
    this.lblMode = changeEvent.tab.textLabel;
  }

}
