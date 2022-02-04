import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipsComponent } from './chips/chips.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    MatChipsModule,
    FontAwesomeModule
  ]
})
export class ChipsModule { }
