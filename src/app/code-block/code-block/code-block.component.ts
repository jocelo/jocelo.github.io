import { Component, Input, OnInit } from '@angular/core';

import { faLanguage, faSearch, faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faJsSquare, faPython, faPhp } from '@fortawesome/free-brands-svg-icons';

import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-code-block',
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.scss']
})
export class CodeBlockComponent implements OnInit {
  @Input() code: any;
  @Input() codeSteps: any;
  @Input() pseudoCode: any;
  @Input() pseudoNotes: any;
  @Input() language = 'en';

  lineByLine: Boolean = false;
  lblMode: string;

  faTimesCircle = faTimesCircle;
  faPlusCircle = faPlusCircle;
  faSearch = faSearch;
  faLanguage = faLanguage;
  faJsSquare = faJsSquare;
  faPython = faPython;
  faPhp = faPhp;

  constructor() { }

  ngOnInit() {
    this.lblMode = 'javascript';
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
    const currentStep: string = event.currentTarget['id'];
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
