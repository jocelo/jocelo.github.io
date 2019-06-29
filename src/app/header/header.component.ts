import { Component, OnInit } from '@angular/core';
import { faCoffee, faTh, faUserCircle, faGlasses } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faCoffee = faCoffee;
  faTh = faTh;
  faUserCircle = faUserCircle;
  
  constructor() { }

  ngOnInit() {

  }

}
