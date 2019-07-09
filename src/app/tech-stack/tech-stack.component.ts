import { Component, OnInit, Input } from '@angular/core';
import { faCoffee, faAngleDown, faAngleUp, faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';
import { faAngular, faReact, faVuejs, faPython, faPhp, faJsSquare, faCuttlefish, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss']
})
export class TechStackComponent implements OnInit {
  @Input() shortVersion: boolean = false;
  faIcons = {
    angleDown: faAngleDown,
    angleUp: faAngleUp,
    angular: faAngular,
    react: faReact,
    vue: faVuejs,
    python: faPython,
    php: faPhp,
    db: faDatabase,
    server: faServer,
    js2: faJsSquare,
    cuttlefish: faCuttlefish,
    microsoft: faMicrosoft
  };
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

  constructor(
    private route: ActivatedRoute
  ) {
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
      bgColor: 'frontend',
      details: [{
        title: 'JavaScript',
        idx: 'javascript',
        bgColor: 'frontend-child',
        details: [{
          title: 'react',
          icon: 'react',
          bgColor: 'frontend-child',
          start: '09/01/2018',
          end: '06/30/2019'
        },{
          title: 'angular.Js',
          icon: 'angular',
          bgColor: 'frontend-child',
          start: '01/15/2019',
          end: '06/30/2019'
        },{
          title: 'angular 7',
          icon: 'angular',
          bgColor: 'frontend-child',
          start: '01/15/2019',
          end: '06/30/2019'
        },{
          title: 'vue',
          icon: 'vue',
          bgColor: 'frontend-child',
          start: '07/01/2017',
          end: '08/30/2018'
        },{
          title: 'jQuery',
          icon: 'js2',
          bgColor: 'frontend-child',
          start: '06/01/2017',
          end: '06/30/2019'
        }]
      }]
    },{
      title: 'Backend',
      idx: 'backend',
      bgColor: 'backend',
      details: [{
        title: 'python',
        icon: 'python',
        bgColor: 'backend-child',
        start: '10/1/2015',
        end: '07/01/2017'
      },{
        title: 'php',
        icon: 'php',
        bgColor: 'backend-child',
        start: '12/01/2015',
        end: '06/01/2016'
      },{
        title: 'coldfusion',
        icon: 'cuttlefish',
        bgColor: 'backend-child',
        start: '10/1/2015',
        end: '06/30/2017'
      }]
    },{
      title: 'Databases',
      idx: 'databases',
      bgColor: 'databases',
      details: [{
        title: 'SQL Server',
        icon: 'db',
        bgColor: 'databases-child',
        start: '10/1/2015',
        end: '06/30/2017'
      }]
    },{
      title: 'Devops',
      idx: 'devops',
      bgColor: 'devops',
      details: [{
        title: 'docker',
        icon: 'server',
        bgColor: 'devops-child',
        start: '07/01/2017',
        end: '08/30/2018'
      },{
        title: 'heroku',
        icon: 'server',
        bgColor: 'devops-child',
        start: '03/01/2019',
        end: '06/30/2019'
      }]
    }];
  }

  ngOnInit() {
    let startTime = new Date(this.timelapse['start']).getTime(),
      endTime = new Date(this.timelapse['end']).getTime(),
      totalTime = endTime - startTime,
      teckStack2 = [];

    this.techstack = this.data.map((category)=>{
      const allMinDates = this.getAllDates([], 'start', category.details),
        allMaxDates = this.getAllDates([], 'end', category.details),
        minDate = allMinDates.reduce((lowestDateStr, actualDateStr)=> new Date(lowestDateStr).getTime() > new Date(actualDateStr).getTime()  ? actualDateStr : lowestDateStr, allMinDates[0]),
        maxDate = allMaxDates.reduce((greatestDateStr, actualDateStr)=> new Date(greatestDateStr).getTime() < new Date(actualDateStr).getTime() ? actualDateStr : greatestDateStr, allMaxDates[0]),
        minTime = new Date(minDate).getTime(),
        maxTime = new Date(maxDate).getTime();

      let children = category.details.map(tech => {
        let moreChildren = [];
        const minTime = new Date(tech.start).getTime();
        const maxTime = new Date(tech.end).getTime();

        if (tech.details) {
          moreChildren = tech.details.map(single=>{
            const minTime = new Date(single.start).getTime();
            const maxTime = new Date(single.end).getTime();

            return {
              title: single.title,
              key: single.idx || '',
              icon: single.icon || '',
              bgColor: single.bgColor || '',
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
          icon: tech.icon || '',
          bgColor: tech.bgColor || '',
          level: 2,
          children: Boolean(tech.details),
          startDate: tech.start,
          endDate: tech.end,
          startTime: '',
          startPoint:(minTime-startTime)*100/totalTime,
          widthPercentage: (maxTime-startTime)*100/totalTime - (minTime-startTime)*100/totalTime,
          parent: category.idx
        }, ...moreChildren]
      }).flat();

      let parent = {
        title: category.title,
        key: category.idx || '',
        icon: category.icon || '',
        bgColor: category.bgColor || '',
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

    console.log('children', this.techstack);
  
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

    this.route.queryParams.subscribe(
      (params: Params) => {
        this.sectionShow[params.section] = true;
      }
    );
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
    if (this.shortVersion) {
      return;
    }
    this.sectionShow[sectionKey] = !this.sectionShow[sectionKey];
    
    // todo: need to rework on this section
    if (sectionKey === 'frontend' && !this.sectionShow[sectionKey]) {
      this.sectionShow['javascript'] = false;
    }
  }
}