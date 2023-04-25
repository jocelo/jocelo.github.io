import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faYoutube, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faLanguage, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-open-vscode-from-terminal',
  templateUrl: './open-vscode-from-terminal.component.html',
  styleUrls: ['./open-vscode-from-terminal.component.scss']
})
export class OpenVscodeFromTerminalComponent implements OnInit {
  faSearch: IconDefinition = faSearch;
  faExclamationCircle: IconDefinition = faYoutube;
  faLanguage: IconDefinition = faLanguage;
  faExternalLink: IconDefinition = faExternalLinkAlt;

  postTitle = 'Open VSCode from the terminal';
  postPicture: any;

  constructor(
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.postTitle + ' - Jocelo blog');
    this.postPicture = {
      src: '/assets/blog/ferenc-almasi--FHIdRVGets-unsplash.jpeg',
      desc: 'Photo by <a href="https://unsplash.com/@flowforfrank?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ferenc Almasi</a> on <a href="https://unsplash.com/photos/-FHIdRVGets?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    };
  }

}
