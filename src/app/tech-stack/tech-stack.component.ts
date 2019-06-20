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
  data = [];
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

    this.data = [{
      title: 'Frontend',
      details: [{
        title: 'javascript',
        details: [{
          title: 'react',
          icon: '',
          start: '09/01/2018',
          end: '06/30/2019'
        },{
          title: 'angular',
          icon: '',
            start: '1/15/2019',
            end: ''
        },{
          title: 'vue',
          icon: '',
          start: '07/01/2017',
          end: '08/30/2018'
        },{
          title: 'jQuery',
          icon: '',
          start: '06/01/2017',
          end: '06/30/2019'
        }]
      }]
    },{
      title: 'Backend',
      details: [{
        title: 'python',
        icon: '',
        start: '10/1/2015',
        end: '07/01/2017'
      },{
        title: 'php',
        icon: '',
        start: '10/1/2015',
        end: '07/01/2017'
      },{
        title: 'coldfusion',
        icon: '',
        start: '10/1/2015',
        end: '06/30/2017'
      }]
    },{
      title: 'Databases',
      details: [{
        title: 'SQL Server',
        icon: '',
        start: '10/1/2015',
        end: '06/30/2017'
      }]
    },{
      title: 'Devops',
      details: [{
        title: 'docker',
        icon: '',
        start: '07/01/2017',
        end: '08/30/2018'
      }]
    }];
  }

  ngOnInit() {
    this.techstack = this.data.map((category)=>{
      const allMinDates = this.getAllDates([], 'start', category.details);
      const allMaxDates = this.getAllDates([], 'end', category.details);
      const minDate = allMinDates.reduce((lowestDateStr, actualDateStr)=> new Date(lowestDateStr).getTime() > new Date(actualDateStr).getTime()  ? actualDateStr : lowestDateStr, allMinDates[0]);
      const maxDate = allMaxDates.reduce((greatestDateStr, actualDateStr)=> new Date(greatestDateStr).getTime() > new Date(actualDateStr).getTime()  ? actualDateStr : greatestDateStr, allMaxDates[0]);

      return ({
        title: category.title,
        startDate: new Date(minDate),
        endDate: new Date(maxDate),
        parent: null
      });
    });
    console.log('this.techstack', this.techstack);
  }

  getAllDates(allDates: any[], dateType: string, details: any[]) {
    for (var i=0 ; i<details.length ; i++) {
      if (details[i]['details']) {
        allDates.concat(this.getAllDates(allDates, dateType, details[i].details));
      }

      allDates.push(details[i][dateType]);
    }
    return allDates;
  }
}