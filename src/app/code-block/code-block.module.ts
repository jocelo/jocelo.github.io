import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeBlockComponent } from './code-block/code-block.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
// console.log('why jere?');
// console.log(HighlightModule);
// console.log(HIGHLIGHT_OPTIONS);
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [CodeBlockComponent],
  imports: [
    CommonModule,
    HighlightModule,
    FontAwesomeModule,
    MatTabsModule,
    MatCardModule
  ],
  exports: [
    CodeBlockComponent
  ],
  providers: [{
    provide: HIGHLIGHT_OPTIONS,
    useValue: {
      fullLibraryLoader: () => import('highlight.js'),
      lineNumbersLoader: () => import('highlightjs-line-numbers.js'),
    }
  }]
})
export class CodeBlockModule { }
