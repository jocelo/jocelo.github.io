import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faYoutube, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faLanguage, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-parametro-o-argumento',
  templateUrl: './parametro-o-argumento.component.html',
  styleUrls: ['./parametro-o-argumento.component.scss']
})
export class ParametroOArgumentoComponent implements OnInit {
  faSearch: IconDefinition = faSearch;
  faExclamationCircle: IconDefinition = faYoutube;
  faLanguage: IconDefinition = faLanguage;
  faExternalLink: IconDefinition = faExternalLinkAlt;

  postTitle = 'Parámetro o Argumento. Cual es la diferencia?';
  postPicture: any;

  constructor(
    private titleService: Title,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.postTitle + ' - Jocelo blog');

    this.postPicture = {
      src: '/assets/blog/altumcode-dC6Pb2JdAqs-unsplash.jpeg',
      desc: 'Foto por <a href="https://unsplash.com/@altumcode?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">AltumCode</a> en <a href="https://unsplash.com/s/photos/stock?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>'
    };
  }

}
