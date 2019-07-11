import { Component, OnInit } from '@angular/core';
import { faUserCircle, faCode, faServer } from '@fortawesome/free-solid-svg-icons';
import { faAngular, faNodeJs, faFontAwesome, faSass, faGithub, faJs, faReact, faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projects = [];
  faIcons = {
    userCircle: faUserCircle,
    angular: faAngular,
    node: faNodeJs,
    fontAwesome: faFontAwesome,
    code: faCode,
    sass: faSass,
    github: faGithub,
    js: faJs,
    react: faReact,
    server: faServer,
    firebase: faGoogle
  }

  constructor() {
    this.projects = [{
      title: 'Homepage',
      link: 'https://jocelowebsite.herokuapp.com',
      desc: "Portfolio's website. Has all the professional information, certifications achieved, tech stack and contact information. Created with angular7 in 2019.",
      img: 'portfolio.png',
      techStack: [
        { name: 'angular 6', icon: 'angular'},
        { name: 'typescript', icon: 'code'},
        { name: 'font awesome', icon: 'fontAwesome'},
        { name: 'sass', icon: 'sass'},
        { name: 'nodeJs', icon: 'node'},
        { name: 'heroku', icon: 'server'}
      ]
    },{
      title: 'JavaScript Mentor at Exercism Website',
      link: 'https://exercism.io/tracks/javascript/mentors',
      desc: "Non-profit project that help developer students to learn different languages. Working in JavaScript's language/track to mentor students in learning JavaScript's language.",
      img: 'exercism.png',
      techStack: [
        { name: 'javascript', icon: 'js'},
        { name: 'github', icon: 'github'}
      ]
    },{
      title: 'Phonebook',
      link: 'https://jocelo.github.io/phonebook/',
      desc: 'Sample application built to showcase basic React+Redux funcionality. Application was created to pass knowledge to a colleague.',
      img: 'phonebook.png',
      techStack: [
        { name: 'react', icon: 'react'},
        { name: 'redux', icon: 'code'},
        { name: 'nodeJs', icon: 'node'},
        { name: 'github pages', icon: 'server'}
      ]
    },{
      title: 'Snake Game',
      link: 'https://jocelo.github.io/snake-game/',
      desc: 'Simple vanilla JS game that replicates the funcionality of the snake game where you move a snake over a board with the only objective to eat apples.',
      img: 'snake.png',
      techStack: [
        { name: 'javascript', icon: 'js'},
        { name: 'github pages', icon: 'server'}
      ]
    },{
      title: 'Wordsearch Generator',
      link: 'https://the-wordsearch-game.herokuapp.com/',
      desc: "Work in progress Application to assist when generating wordsearch games. One of the main features is that it is miltilingual and in the plans it is to have export and import features. This games will be used to feed the crossword game that's being developed.",
      img: 'wordsearch.png',
      techStack: [
        { name: 'angular 6', icon: 'angular'},
        { name: 'typescript', icon: 'code'},
        { name: 'font awesome', icon: 'fontAwesome'},
        { name: 'nodeJs', icon: 'node'},
        { name: 'heroku', icon: 'server'},
        { name: 'firebase', icon: 'firebase'}
      ]
    },{
      title: 'Credit Card Validator',
      link: 'https://public.jocelohere.now.sh/',
      desc: 'Small Project generated using svelte JS and serverless technology for deploying the project. Created to particiate in a challenge launched by coderos youtube channel.',
      img: 'ccvalidator.png',
      techStack: [
        { name: 'svelte', icon: 'js'},
        { name: 'nodeJs', icon: 'node'},
        { name: 'zeit now', icon: 'server'}
      ]
    }]
  }

  ngOnInit() {
  }

}
