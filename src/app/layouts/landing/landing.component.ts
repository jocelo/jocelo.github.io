import { Component, OnInit } from '@angular/core';
import { faSearch, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faCodepen, faLinkedin, faYoutube, faTwitter, faInstagram, faJsSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  wordSearched = '';
  shake = false;
  topics: Array<string> = ['portfolio', 'certifications', 'photos', 'languages', 'store', 'tech stack', 'videos'];
  topicSelected: string;

  faIcons = {
    search: faSearch,
    envelope: faEnvelope,
    github: faGithub,
    codepen: faCodepen,
    linkedin: faLinkedin,
    youtube: faYoutube,
    twitter: faTwitter,
    instagram: faInstagram,
    exercism: faJsSquare
  };

  constructor() {
    this.getRandomTopic();
  }

  getRandomTopic() {
    const selected = Math.floor(Math.random() * this.topics.length);
    this.topicSelected = this.topics[selected];
  }

  animate(status = true): void {
    this.shake = status;
  }

  killAnimation(): void {
    this.animate(false);
  }

  handleKeyDown(event): void {
    event.preventDefault();
    event.stopPropagation();

    if (event.keyCode === 8) {
      this.wordSearched = this.wordSearched.slice(0, -1);
      this.killAnimation();

      if (this.wordSearched.length === 0) {
        this.getRandomTopic();
      }
    } else if (this.wordSearched.length < this.topicSelected.length) {
      this.wordSearched += this.topicSelected[this.wordSearched.length];
      this.killAnimation();
    } else if (this.wordSearched.length === this.topicSelected.length) {
      this.animate();
    }
  }

  handleKeyUp(event): void {
    event.preventDefault();
    event.stopPropagation();
  }

  ngOnInit() {

  }
}
