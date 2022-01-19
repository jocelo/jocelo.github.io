import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipsComponent } from './chips/chips.component';

import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    ChipsComponent
  ],
  exports: [
    ChipsComponent
  ],
  imports: [
    CommonModule,
    MatChipsModule
  ]
})
export class ChipsModule { }
