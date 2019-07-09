import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faIcons = {
    github: faGithub,
    linkedin: faLinkedin
  }
  showHeader: boolean = true;
  selectedItem: string = '';

  constructor(private route: Router) {
    this.routeEvent(this.route);
  }
 
  routeEvent(router: Router) {
    router.events.subscribe(
      event=>{
        if (event instanceof NavigationEnd) {
          this.showHeader = ['/', '/index'].indexOf(event.url) !== -1;
          this.selectedItem = event.url.split('/')[1];
        }
      }
    )
  }

  ngOnInit() {
  }

}
