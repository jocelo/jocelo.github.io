import { Component, Input, OnInit } from '@angular/core';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-translated',
  templateUrl: './post-translated.component.html',
  styleUrls: ['./post-translated.component.scss']
})
export class PostTranslatedComponent implements OnInit {
  @Input() lang: string;
  @Input() link: string;

  englishVersion: boolean;
  spanishVersion: boolean;

  faLanguage = faLanguage;

  constructor() {
    this.englishVersion = false;
    this.spanishVersion = false;
  }

  ngOnInit(): void {
    if (this.lang === 'es') {
      this.spanishVersion = true;
    }

    if (this.lang === 'en') {
      this.englishVersion = true;
    }
  }

}
