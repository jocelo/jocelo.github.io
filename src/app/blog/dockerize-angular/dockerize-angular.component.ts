import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dockerize-angular',
  templateUrl: './dockerize-angular.component.html',
  styleUrls: ['./dockerize-angular.component.css']
})
export class DockerizeAngularComponent implements OnInit {
  code: string;
  dockerCode: any;
  constructor() { }

  ngOnInit(): void {
    this.dockerCode['dockerVersion'] = `docker -v`;
    this.dockerCode['dockerRun'] = `docker run -d centosng6`;

  }


}
