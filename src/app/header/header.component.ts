import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { faUserCircle, faSearch, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faCodepen, faLinkedin, faYoutube, faTwitter, faInstagram, faJsSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faIcons = {
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
  }
  showHeader: boolean = true;

  constructor(private route: Router) {
    this.routeEvent(this.route);
  }
 
  routeEvent(router: Router) {
    router.events.subscribe(
      event=>{
        if (event instanceof NavigationEnd) {
          this.showHeader = ['/', '/index'].indexOf(event.url) !== -1;
        }
      }
    )
  }

  ngOnInit() {
  }

}
