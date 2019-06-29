import { Component, OnInit } from '@angular/core';
import { faCoffee, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss']
})
export class TechStackComponent implements OnInit {
  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;
  techstack = [];
  data = [];
  timelapse = {};
  startTime = 0;
  endTime = 0;
  totalTime = 0;
  timeSlots = [];
  percentajeSlots = [];
  trimesterInMS = 2592000000 * 4;
  sectionShow = {};

  constructor() {
    this.timelapse = {
      start: '10/1/2015',
      end: '06/30/2019'
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
      idx: 'frontend',
      details: [{
        title: 'JavaScript',
        idx: 'javascript',
        details: [{
          title: 'react',
          icon: '',
          start: '09/01/2018',
          end: '06/30/2019'
        },{
          title: 'angular.Js',
          icon: '',
            start: '01/15/2019',
            end: '06/30/2019'
        },{
          title: 'angular 7',
          icon: '',
            start: '01/15/2019',
            end: '06/30/2019'
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
      idx: 'backend',
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
      idx: 'databases',
      details: [{
        title: 'SQL Server',
        icon: '',
        start: '10/1/2015',
        end: '06/30/2017'
      }]
    },{
      title: 'Devops',
      idx: 'devops',
      details: [{
        title: 'docker',
        icon: '',
        start: '07/01/2017',
        end: '08/30/2018'
      }]
    }];
  }

  ngOnInit() {
    let startTime = new Date(this.timelapse['start']).getTime(),
      endTime = new Date(this.timelapse['end']).getTime(),
      totalTime = endTime - startTime;

    let teckStack2 = [];

    this.techstack = this.data.map((category)=>{
      const allMinDates = this.getAllDates([], 'start', category.details);
      const allMaxDates = this.getAllDates([], 'end', category.details);
      const minDate = allMinDates.reduce((lowestDateStr, actualDateStr)=> new Date(lowestDateStr).getTime() > new Date(actualDateStr).getTime()  ? actualDateStr : lowestDateStr, allMinDates[0]);
      const maxDate = allMaxDates.reduce((greatestDateStr, actualDateStr)=> new Date(greatestDateStr).getTime() < new Date(actualDateStr).getTime() ? actualDateStr : greatestDateStr, allMaxDates[0]);
      const minTime = new Date(minDate).getTime();
      const maxTime = new Date(maxDate).getTime();

      let children = category.details.map(tech => {
        let moreChildren = [];

        if (tech.details) {
          moreChildren = tech.details.map(single=>{
            const minTime = new Date(single.start).getTime();
            const maxTime = new Date(single.end).getTime();

            return {
              title: single.title,
              key: single.idx || '',
              level: 3,
              children: Boolean(single.details),
              startDate: single.start,
              endDate: single.end,
              startTime: '',
              startPoint: (minTime-startTime)*100/totalTime,
              widthPercentage: (maxTime-startTime)*100/totalTime - (minTime-startTime)*100/totalTime,
              parent: tech.idx
            }
          })
        }

        return [{
          title: tech.title,
          key: tech.idx || '',
          level: 2,
          children: Boolean(tech.details),
          startDate: tech.start,
          endDate: tech.end,
          startTime: '',
          startPoint: '',
          widthPercentage: '',
          parent: category.idx
        }, ...moreChildren]
      }).flat();

      let parent = {
        title: category.title,
        key: category.idx || '',
        level: 1,
        children: Boolean(category.details),
        startDate: minDate,
        endDate: maxDate,
        startTime: maxTime,
        startPoint: (minTime-startTime)*100/totalTime,
        widthPercentage: (maxTime-startTime)*100/totalTime - (minTime-startTime)*100/totalTime,
        parent: null
      };

      return [parent, ...children];
    });
  
    this.techstack.map(singleStack=>{
      singleStack.map(one=>{
        teckStack2.push(one);
      });
    });

    this.techstack = teckStack2;

    this.sectionShow = this.techstack.reduce((allItems, item)=>{
      if (item.parent) {
        allItems[item.parent] = false;
      }
      return allItems;
    }, {});
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

  showHideSection(sectionKey) {
    this.sectionShow[sectionKey] = !this.sectionShow[sectionKey];
  }
}