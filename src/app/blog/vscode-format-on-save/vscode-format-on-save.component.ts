import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vscode-format-on-save',
  templateUrl: './vscode-format-on-save.component.html',
  styleUrls: ['./vscode-format-on-save.component.scss']
})
export class VscodeFormatOnSaveComponent implements OnInit {
  faLaptopCode = faLaptopCode;
  postTitle = 'Formatting source files with VSCode';

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.postTitle + ' - Alfredo blog');
  }

}
