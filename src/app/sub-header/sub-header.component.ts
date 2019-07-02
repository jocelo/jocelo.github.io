import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {
  selectedItem: string = 'all';
  showLinks: boolean = true;

  constructor(private route: Router) {
    this.routerEvent(this.route);
  }

  routerEvent(router: Router) {
    router.events.subscribe(
      event => {
        if (event instanceof NavigationEnd) {
          this.showLinks = ['/', '/index'].indexOf(event.url) !== -1;
          this.selectedItem = event.url.split('/')[1];
        }
      }
    );
  }

  ngOnInit() {
  }

  searchAgain() {}
}
