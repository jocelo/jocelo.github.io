import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  wordSearched: string = '';
  shake: boolean = false;
  topics: Array<string> = ['portfolio', 'certifications', 'photos', 'languages', 'store', 'tech stack', 'videos'];
  topicSelected: string;

  faSearch = faSearch;

  constructor() {
    this.getRandomTopic();
  }

  getRandomTopic() {
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
      this.wordSearched = this.wordSearched.slice(0,-1);
      this.killAnimation();
      
      if (this.wordSearched.length === 0) {
        this.getRandomTopic();
      }
    } else if (this.wordSearched.length < this.topicSelected.length) {
      this.wordSearched += this.topicSelected[this.wordSearched.length];
      this.killAnimation();
    } else if (this.wordSearched.length == this.topicSelected.length) {
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
