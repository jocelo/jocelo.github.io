import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeBlockComponent } from './code-block/code-block.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HighlightModule } from 'ngx-highlightjs';
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
  providers: []
})
export class CodeBlockModule { }
