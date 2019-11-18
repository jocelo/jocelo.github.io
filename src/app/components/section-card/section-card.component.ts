import { Component, OnInit, Input } from '@angular/core';
import { faAngular, faNodeJs, faFontAwesome, faSass, faGithub, faJs, faReact, faGoogle, faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faLowVision } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-section-card',
  templateUrl: './section-card.component.html',
  styleUrls: ['./section-card.component.scss']
})
export class SectionCardComponent implements OnInit {
  @Input() post: {};

  faIcons = {
    js: faJs,
    css: faCss3,
    angular: faAngular,
    vision: faLowVision
  };

  constructor() { }

  ngOnInit() {
  }

}
