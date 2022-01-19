import { Component, OnInit } from '@angular/core';

export interface PostData {
  name: string;
  url?: string;
}

@Component({
  selector: 'app-balanceo-de-parentesis',
  templateUrl: './balanceo-de-parentesis.component.html',
  styleUrls: ['./balanceo-de-parentesis.component.css']
})
export class BalanceoDeParentesisComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {
    this.js_code = `
function main() {
  const test: string: 1;
  let uno: number 1:

  for (let i=0 ; i<10 ; i++) {
    // the first comment
    let j = 0;
    // the second comment
    var g = 99;
  }
}
    `;

    this.py_code = `
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
  }

}
