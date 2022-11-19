import { Component, OnInit } from '@angular/core';
import { faYoutube, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faLanguage, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-parameter-or-argument',
  templateUrl: './parameter-or-argument.component.html',
  styleUrls: ['./parameter-or-argument.component.scss']
})
export class ParameterOrArgumentComponent implements OnInit {
  faSearch: IconDefinition = faSearch;
  faExclamationCircle: IconDefinition = faYoutube;
  faLanguage: IconDefinition = faLanguage;
  faExternalLink: IconDefinition = faExternalLinkAlt;

  postPicture: any;

  constructor() { }

  ngOnInit(): void {
    this.postPicture = {
      src: '/assets/blog/altumcode-dC6Pb2JdAqs-unsplash.jpeg',
      desc: 'Photo by <a href="https://unsplash.com/@altumcode?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">AltumCode</a> en <a href="https://unsplash.com/s/photos/stock?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>'
    };
  }

}
