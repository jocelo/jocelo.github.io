import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeBlockComponent } from './code-block/code-block.component';

@NgModule({
  declarations: [CodeBlockComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CodeBlockComponent
  ]
})
export class CodeBlockModule { }
