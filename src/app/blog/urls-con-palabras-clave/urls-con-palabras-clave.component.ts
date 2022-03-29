import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { BlogService } from 'src/app/services/blog.service';

import { faLanguage, faEllipsisV, faBars } from '@fortawesome/free-solid-svg-icons';
import { faChrome, faFirefox, faFontAwesome, faGithubSquare, faJira } from '@fortawesome/free-brands-svg-icons';


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
  faEllipsisV = faEllipsisV;
  faGithubSquare = faGithubSquare;
  faBars = faBars;
  faFontAwesome = faFontAwesome;
  faJira = faJira;
  faChrome = faChrome;
  faFirefox = faFirefox;

  nextPosts: InextPost[] = [];
  postTitle = 'URLS Dinámicos';
  postPicture: {
    src: string;
    desc: string;
  };

  constructor(
    private metaService: Meta,
    private service: BlogService,
    private router: Router,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.nextPosts = this.service.getRelatedArticles(this.router.url);

    this.titleService.setTitle(this.postTitle + ' - Jocelo blog');
    this.metaService.addTag(
      { name: 'description', content: 'Tip de productividad para que le saques el máximo provecho a los sitios que visitas frecuentemente y solo cambia una pequeña parte de la URL. Revisamos las configuraciones necesarias para usarse en Chrome, Firefox y Brave.' }
    );

    this.postPicture = {
      src: '/assets/blog/christian-wiediger-WkfDrhxDMC8-unsplash.jpg',
      desc: 'Photo by <a href="https://unsplash.com/@christianw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Christian Wiediger</a > on <a href="https://unsplash.com/s/photos/computer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Unsplash </a>'
    };
  }

}
