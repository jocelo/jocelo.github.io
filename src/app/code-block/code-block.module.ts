import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeBlockComponent } from './code-block/code-block.component';

import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

@NgModule({
  declarations: [CodeBlockComponent],
  imports: [
    CommonModule,
    HighlightModule,
  ],
  exports: [
    CodeBlockComponent
  ],
  providers: [{
    provide: HIGHLIGHT_OPTIONS,
    useValue: {
      fullLibraryLoader: () => import('highlight.js')
    }
  }]
})
export class CodeBlockModule { }
