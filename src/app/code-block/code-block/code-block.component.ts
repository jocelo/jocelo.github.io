import { Component, Input, OnInit, Inject } from '@angular/core';

import { faLanguage, faSearch, faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faJsSquare, faPython, faPhp, faJava } from '@fortawesome/free-brands-svg-icons';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MatTabChangeEvent } from '@angular/material/tabs';

export interface DialogData {
  postTitle: string;
  language: string;
  code: any;
  codeSteps: any;
  pseudoCode: any;
}

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
  @Input() postTitle: string;
  @Input() language = 'en';

  lineByLine: Boolean = false;
  lblMode: string;

  faTimesCircle = faTimesCircle;
  faPlusCircle = faPlusCircle;
  faSearch = faSearch;
  faLanguage = faLanguage;
  faJsSquare = faJsSquare;
  faJava = faJava;
  faPython = faPython;
  faPhp = faPhp;

  constructor(public dialog: MatDialog) { }

  public openDialog(): void {
    this.dialog.open(LineByLineDialog, {
      maxWidth: '98vw',
      maxHeight: '98vh',
      height: '98%',
      data: {
        postTitle: this.postTitle,
        language: this.language,
        code: this.code,
        codeSteps: this.codeSteps,
        pseudoCode: this.pseudoCode
      }
    });
  }

  ngOnInit() {
    const firstCode = Object.keys(this.code)[0];
    this.lblMode = firstCode.split('_')[0];
  }

  public myTabFocusChange(changeEvent: MatTabChangeEvent): void {
    this.lblMode = changeEvent.tab.textLabel;
  }
}

@Component({
  selector: 'line-by-line-code-dialog',
  templateUrl: 'dialog/line-by-line-dialog.html',
  styleUrls: ['dialog/line-by-line.scss']
})
export class LineByLineDialog {
  lineByLine = false;
  language: string;
  code: any;
  codeSteps: any;
  pseudoCode: any;
  pseudoNotes: any;
  postTitle: string;
  lblMode: string;

  faTimesCircle = faTimesCircle;
  faPlusCircle = faPlusCircle;
  faSearch = faSearch;
  faLanguage = faLanguage;
  faJsSquare = faJsSquare;
  faJava = faJava;
  faPython = faPython;
  faPhp = faPhp;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.postTitle = data.postTitle;
    this.language = data.language;
    this.code = data.code;
    this.codeSteps = data.codeSteps;
    this.pseudoCode = data.pseudoCode;

    const firstCode = Object.keys(data.code)[0];
    this.lblMode = firstCode.split('_')[0];
  }

  public showNotes(theNote): boolean {
    if (this.lblMode === theNote.lang) {
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
