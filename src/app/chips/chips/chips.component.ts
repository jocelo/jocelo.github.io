import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

export interface Vegetable {
  name: string;
}

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css']
})
export class ChipsComponent implements OnInit {
  @Input()
  data: any[];

  faExternalLinkAlt = faExternalLinkAlt;

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<Vegetable[]>) {
    moveItemInArray(this.data, event.previousIndex, event.currentIndex);
  }

  public openLink(siteUrl: string): void {
    if (siteUrl) {
      window.open(siteUrl, '_blank');
    }
  }

}
