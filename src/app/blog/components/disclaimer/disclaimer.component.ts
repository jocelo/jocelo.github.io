import { Component, Input, OnInit } from '@angular/core';

import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.scss']
})
export class DisclaimerComponent implements OnInit {
  @Input()
  lang = 'en';

  faDisclaimer = faExclamationTriangle;

  constructor() { }

  ngOnInit(): void {
  }

}
