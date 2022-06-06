import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeBlockComponent } from './code-block/code-block.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HighlightModule } from 'ngx-highlightjs';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';

import { LineByLineDialog } from './code-block/code-block.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CodeBlockComponent, LineByLineDialog],
  imports: [
    CommonModule,
    HighlightModule,
    FontAwesomeModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule,
    MatCardModule
  ],
  exports: [
    CodeBlockComponent
  ],
  providers: []
})
export class CodeBlockModule { }
