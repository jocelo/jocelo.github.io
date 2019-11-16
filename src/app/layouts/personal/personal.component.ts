import { Component, OnInit } from '@angular/core';
import { faPepperHot, faStar, faExternalLinkAlt, faUserCircle, faSearch, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCanadianMapleLeaf, faGithub, faCodepen, faLinkedin, faYoutube, faTwitter, faInstagram, faJsSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  faIcons = {
    pepperhot: faPepperHot,
    leaf: faCanadianMapleLeaf,
    star: faStar,
    externallink: faExternalLinkAlt,
    userCircle: faUserCircle,
    search: faSearch,
    envelope: faEnvelope,
    github: faGithub,
    codepen: faCodepen,
    linkedin: faLinkedin,
    youtube: faYoutube,
    twitter: faTwitter,
    instagram: faInstagram,
    exercism: faJsSquare
  };

  
  constructor() { }

  ngOnInit() {
  }

}
