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
  timelapse = {};
  startTime = 0;
  endTime = 0;
  totalTime = 0;
  timeSlots = [];
  percentajeSlots = [];
  trimesterInMS = 2592000000 * 4;

  constructor() {
    this.timelapse = {
      start: '10/1/2015',
      end: '05/01/2019'
    };
    this.startTime = new Date(this.timelapse['start']).getTime();
    this.endTime = new Date(this.timelapse['end']).getTime();
    this.totalTime = this.endTime - this.startTime;

    for (var i= this.startTime; i <= this.endTime ; i+=this.trimesterInMS) {
      this.timeSlots.push({
        time: i,
        percentage: Math.floor((i-this.startTime)*100/this.totalTime)
      });
    }

    this.techstack = [{
      title: 'Frontend',
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
      title: 'Backend',
      details: [{
        title: 'python',
        icon: '',
        time: [{
          start: '1/1/2010',
          end: '12/31/2013'
        }]
      }]
    },{
      title: 'Databases',
      details: []
    },{
      title: 'Softskills',
      details: []
    }];
  }

  ngOnInit() {
  }

}
