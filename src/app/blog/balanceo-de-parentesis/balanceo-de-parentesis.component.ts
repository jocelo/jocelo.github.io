import { Component, OnInit } from '@angular/core';

import { faSearch, faRulerHorizontal, faBatteryHalf } from '@fortawesome/free-solid-svg-icons';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

export interface PostData {
  name: string;
  url?: string;
}

export interface Vegetable {
  name: string;
}


@Component({
  selector: 'app-balanceo-de-parentesis',
  templateUrl: './balanceo-de-parentesis.component.html',
  styleUrls: ['./balanceo-de-parentesis.component.css']
})
export class BalanceoDeParentesisComponent implements OnInit {
  faSearch = faSearch;
  faRulerHorizontal = faRulerHorizontal;
  faBatteryHalf = faBatteryHalf;
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

  icons: any;

  constructor() { }

  ngOnInit() {
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
  }
    `;

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

return True
    `;

    this.php_code = `
    class Test:
      def __init__(self):
        self.one = 1
        self.two = True
        self.obbj = [1, 2, 3]

      # another new method
      // with a js comment
      def testing(self, second):
        three = 3
        return False
        `;

    this.icons = {
      'arrays': faRulerHorizontal,
      'pilas': faBatteryHalf
    };
  }

  drop(event: CdkDragDrop<Vegetable[]>) {
    moveItemInArray(this.sites, event.previousIndex, event.currentIndex);
  }

}
