import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faYoutube, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faLanguage, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-abrir-vscode-desde-terminal',
  templateUrl: './abrir-vscode-desde-terminal.component.html',
  styleUrls: ['./abrir-vscode-desde-terminal.component.scss']
})
export class AbrirVscodeDesdeTerminalComponent implements OnInit {
  faSearch: IconDefinition = faSearch;
  faExclamationCircle: IconDefinition = faYoutube;
  faLanguage: IconDefinition = faLanguage;
  faExternalLink: IconDefinition = faExternalLinkAlt;

  postTitle = 'Abrir VSCode desde la terminal';
  postPicture: any;

  constructor(
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.postTitle + ' - Jocelo blog');
    this.postPicture = {
      src: '/assets/blog/riku-lu-wvJuYrM5iuw-unsplash.jpeg',
      desc: 'Photo by <a href="https://unsplash.com/@riku?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Riku Lu</a> on <a href="https://unsplash.com/photos/wvJuYrM5iuw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    };
  }

}
