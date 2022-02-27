import { Component, OnInit } from '@angular/core';

import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vscode-format-on-save',
  templateUrl: './vscode-format-on-save.component.html',
  styleUrls: ['./vscode-format-on-save.component.scss']
})
export class VscodeFormatOnSaveComponent implements OnInit {

  faLaptopCode = faLaptopCode;

  constructor() { }

  ngOnInit(): void {
  }

}
