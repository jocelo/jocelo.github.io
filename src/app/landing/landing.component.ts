import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  cochinada: string = '';
  shake: boolean = false;
  topics: Array<string> = ['portfolio', 'certifications', 'games', 'photos', 'languages', 'store', 'tech stack', 'videos'];
  topicSelected: string;

  constructor() {
    let selected = Math.floor(Math.random() * this.topics.length);
    this.topicSelected = this.topics[selected];
  }
  
  animate(status=true): void {
    this.shake = status;
  }

  killAnimation(): void {
    this.animate(false);
  }

  handleKeyDown(event): void {
    event.preventDefault();
    event.stopPropagation();
    if ( event.keyCode == 8) {
      this.cochinada = this.cochinada.slice(0,-1);
      this.killAnimation();
    } else if (this.cochinada.length < this.topicSelected.length) {
      this.cochinada += this.topicSelected[this.cochinada.length];
      this.killAnimation();
    } else if (this.cochinada.length == this.topicSelected.length) {
      this.animate();
    }
  }

  log(msg='default msg') {
    console.log(msg);
  }

  handleKeyUp(event): void {
    event.preventDefault();
    event.stopPropagation();
  }

  ngOnInit() {

  }
}
