import { Component, OnInit } from '@angular/core';
import { faPepperHot, faStar } from '@fortawesome/free-solid-svg-icons';
import { faCanadianMapleLeaf } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  faPepperHot = faPepperHot;
  faLeaf = faCanadianMapleLeaf;
  faStar = faStar;
  
  constructor() { }

  ngOnInit() {
  }

}
