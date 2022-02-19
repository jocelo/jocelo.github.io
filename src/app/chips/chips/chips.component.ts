import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { faExternalLinkAlt, faRulerHorizontal, faBatteryHalf, faFileCode } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

export interface Vegetable {
  name: string;
}

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css']
})
export class ChipsComponent implements OnInit {
  @Input() data: any[];
  @Input() blogLinks: boolean;

  icons: any;

  faExternalLinkAlt = faExternalLinkAlt;
  faRulerHorizontal = faRulerHorizontal;
  faBatteryHalf = faBatteryHalf;
  faFileCode = faFileCode;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.icons = {
      'arrays': faRulerHorizontal,
      'stack': faBatteryHalf,
      'pilas': faBatteryHalf,
      'algorithms': faFileCode,
      'algoritmos': faFileCode
    };
  }

  drop(event: CdkDragDrop<Vegetable[]>) {
    moveItemInArray(this.data, event.previousIndex, event.currentIndex);
  }

  public openLink(siteUrl: string): void {
    if (siteUrl) {
      window.open(siteUrl, '_blank');
    }
  }

  public openWithFilter(searchToken): void {
    this.router.navigate(['/blog/topic/', searchToken]);
  }

}
