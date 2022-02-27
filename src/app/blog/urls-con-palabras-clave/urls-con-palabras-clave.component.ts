import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BlogService } from 'src/app/services/blog.service';

import { faLanguage } from '@fortawesome/free-solid-svg-icons';

export interface InextPost {
  title: string;
  url: string;
}

@Component({
  selector: 'app-urls-con-palabras-clave',
  templateUrl: './urls-con-palabras-clave.component.html',
  styleUrls: ['./urls-con-palabras-clave.component.scss']
})
export class UrlsConPalabrasClaveComponent implements OnInit {
  faLanguage = faLanguage;

  nextPosts: InextPost[] = [];

  constructor(
    private service: BlogService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.nextPosts = this.service.getRelatedArticles(this.router.url);
  }

}
