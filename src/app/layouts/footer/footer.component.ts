import { Component, OnInit } from '@angular/core';
import { Icon } from '@fortawesome/fontawesome-svg-core';
import { faCanadianMapleLeaf, faTwitter, faCodepen, faGithub, faHackerrank, faInstagram, faJsSquare, faLinkedin, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCopyright, faEnvelope, faExternalLinkAlt, faPepperHot, faProjectDiagram, faSearch, faStar, faUserCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faCopyright: IconDefinition = faCopyright;
  faTwitter: IconDefinition = faTwitterSquare;

  faIcons = {
    codepen: faCodepen,
    envelope: faEnvelope,
    exercism: faJsSquare,
    externallink: faExternalLinkAlt,
    github: faGithub,
    hackerrank: faHackerrank,
    instagram: faInstagram,
    leaf: faCanadianMapleLeaf,
    linkedin: faLinkedin,
    pepperhot: faPepperHot,
    diagram: faProjectDiagram,
    search: faSearch,
    star: faStar,
    twitter: faTwitter,
    userCircle: faUserCircle,
    youtube: faYoutube
  };

  today: number;

  constructor() { }

  ngOnInit() {
    this.today = Date.now();
  }

}
