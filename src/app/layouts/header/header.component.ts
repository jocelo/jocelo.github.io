import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ROUTER_CONFIGURATION } from '@angular/router';

import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars, faSuitcase, faAward, faCode, faShoppingCart, faRss } from '@fortawesome/free-solid-svg-icons';
import { faCaretSquareDown, faCaretSquareUp } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faIcons = {
    github: faGithub,
    linkedin: faLinkedin,
    faCaretSquareDown: faCaretSquareDown,
    faCaretSquareUp: faCaretSquareUp,
    suitcase: faSuitcase,
    award: faAward,
    code: faCode,
    youtube: faYoutube,
    faRss: faRss
  };
  showHeader: boolean;
  selectedItem: string;
  mobileSectionTitle: string;

  constructor(private router: Router) {
    this.routeEvent(this.router);
  }

  public routeEvent(router: Router): void {
    router.events.subscribe(
      event => {
        if (event instanceof NavigationEnd) {
          this.showHeader = ['/', '/index'].indexOf(event.url) !== -1;
          this.selectedItem = event.url.split('/')[1];
          this.mobileSectionTitle = this.formatTitle(this.selectedItem);
        }
      }
    );
  }

  public formatTitle(title): string {
    if (!title || title === '/' || title === 'all') {
      return '';
    }
    let midFormat = title.replace('-', ' ');
    midFormat = midFormat.split(' ').map(item => item[0].toUpperCase() + item.substr(1)).join(' ');
    return midFormat;
  }

  ngOnInit() {
    this.showHeader = true;
    this.selectedItem = '';
  }

  public openSection(section: string): void {
    this.router.navigate(['/', section]);
  }

}
