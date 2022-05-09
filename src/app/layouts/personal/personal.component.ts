import { Component, OnInit } from '@angular/core';
import { faStar, faExternalLinkAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  faIcons = {
    externallink: faExternalLinkAlt,
    star: faStar,
    userCircle: faUserCircle,
  };


  constructor() { }

  ngOnInit() {
  }

}
