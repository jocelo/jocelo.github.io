import { Component, OnInit } from '@angular/core';
import { faCoffee, faTh } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faCoffee = faCoffee;
  faTh = faTh;
  constructor() { }

  ngOnInit() {
  }

}
