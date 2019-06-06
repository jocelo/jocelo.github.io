import { Component, OnInit } from '@angular/core';
import { faCoffee, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss']
})
export class TechStackComponent implements OnInit {
  faAngleDoubleDown = faAngleDoubleDown;
  techstack = [];
  timelapse = [];
  cols = new Array(39);

  constructor() {
    this.timelapse = [{
      start: '10/1/2006',
      end: '05/01/2019'
    }];
    this.techstack = [{
      title: 'frontend',
      details: [{
        title: 'javascript',
        details: [{
          title: 'react',
          icon: '',
          time: [{
            start: '10/01/2007',
            end: '12/12/2015'
          }]
        },{
          title: 'angular',
          icon: '',
          time: [{
            start: '1/15/2019',
            end: ''
          }]
        },{
          title: 'jQuery',
          icon: '',
          time: [{
            start: '1/15/2019',
            end: ''
          }]
        }]
      }]
    },{
      title: 'backend',
      details: [{
        title: 'python',
        icon: '',
        time: [{
          start: '1/1/2010',
          end: '12/31/2013'
        }]
      }]
    },{
      title: 'databases',
      details: []
    }];
  }

  ngOnInit() {
  }

}
