import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
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

  postTitle = 'Parameter or Argument. What is the difference?';
  postPicture: any;

  constructor(
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.postTitle + ' - Jocelo blog');
    this.postPicture = {
      src: '/assets/blog/altumcode-dC6Pb2JdAqs-unsplash.jpeg',
      desc: 'Photo by <a href="https://unsplash.com/@altumcode?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">AltumCode</a> on <a href="https://unsplash.com/s/photos/stock?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>'
    };
  }

}
