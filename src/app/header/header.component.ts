import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faIcons = {
    userCircle: faUserCircle
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
