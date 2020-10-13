import { Component, OnInit } from '@angular/core';
import { faPepperHot, faStar, faExternalLinkAlt, faUserCircle, faSearch, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCanadianMapleLeaf, faGithub, faCodepen, faLinkedin, faYoutube, faTwitter, faInstagram, faJsSquare, faHackerrank } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
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
    search: faSearch,
    star: faStar,
    twitter: faTwitter,
    userCircle: faUserCircle,
    youtube: faYoutube
  };

  
  constructor() { }

  ngOnInit() {
  }

}
