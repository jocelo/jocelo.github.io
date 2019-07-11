import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars, faSuitcase, faAward, faCode, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faIcons = {
    github: faGithub,
    linkedin: faLinkedin,
    bars: faBars,
    suitcase: faSuitcase,
    award: faAward,
    code: faCode,
    youtube: faYoutube
  }
  showMobileMenu: boolean = false;
  showHeader: boolean = true;
  selectedItem: string = '';
  mobileSectionTitle: string = 'Homepage';

  constructor(private route: Router) {
    this.routeEvent(this.route);
  }
 
  routeEvent(router: Router) {
    router.events.subscribe(
      event=>{
        if (event instanceof NavigationEnd) {
          this.showHeader = ['/', '/index'].indexOf(event.url) !== -1;
          this.selectedItem = event.url.split('/')[1];
          this.mobileSectionTitle = this.formatTitle(this.selectedItem);
          this.showMobileMenu = false;
        }
      }
    )
  }

  toggleMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }

  formatTitle(title) {
    let midFormat = title.replace('-',' ');
    midFormat = midFormat.split(' ').map(item=>item[0].toUpperCase()+item.substr(1)).join(' ');
    return midFormat;
  }

  ngOnInit() {
  }

}
