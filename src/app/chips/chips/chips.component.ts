import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import {
  faBatteryHalf,
  faBook,
  faCubes,
  faExternalLinkAlt,
  faFileCode,
  faRulerHorizontal,
  faTable,
  faLayerGroup
} from '@fortawesome/free-solid-svg-icons';

import { faUncharted } from '@fortawesome/free-brands-svg-icons';

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

  faCubes = faCubes;
  faExternalLinkAlt = faExternalLinkAlt;
  faRulerHorizontal = faRulerHorizontal;
  faBatteryHalf = faBatteryHalf;
  faFileCode = faFileCode;
  faTable = faTable;
  faBooks = faBook;
  faUncharted = faUncharted;
  faLayerGroup = faLayerGroup;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.icons = {
      'arrays': faRulerHorizontal,
      'stack': faBatteryHalf,
      'pilas': faBatteryHalf,
      'algorithms': faFileCode,
      'algoritmos': faFileCode,
      'hashtable': faTable,
      'blind_75': faBook,
      'data structures': faCubes,
      'estructuras de datos': faCubes,
      'dynamic programming': faUncharted,
      'programacion dinamica': faUncharted,
      'prefix sum': faLayerGroup,
      'suma prefijos': faLayerGroup
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
