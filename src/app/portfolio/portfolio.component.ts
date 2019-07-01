import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projects = [];

  constructor() {
    this.projects = [{
      title: 'Homepage',
      link: 'https://jocelo.github.io',
      desc: "Portfolio's website. Has all the professional information, certifications achieved, tech stack and contact information. Created with angular7 in 2019."
    },{
      title: 'JS Mentor at Exercism website',
      link: 'https://exercism.io/tracks/javascript/mentors',
      desc: 'Giving back to the community in a non-profit website to help improve problem solving, though exercise solvig with vanilla JavaScript.'
    },{
      title: 'Phonebook',
      link: 'https://jocelo.github.io/phonebook/',
      desc: 'Sample application that showcase basic react and redux funcionality. Can '
    },{
      title: 'Snake game',
      link: 'https://jocelo.github.io/snake-game/',
      desc: 'Simple vanilla JS game that replicates the funcionality of the snake game where you move a snake over a board with the only objective to eat apples.'
    },{
      title: 'Wordsearch Generator',
      link: 'https://jocelo.github.io/wordsearch-generator/',
      desc: 'Application created with react to genreate and play wordsearch games. This was created in order to have a way of easily generate more crossword games.'
    },{
      title: 'Credit Card Validator',
      link: 'https://public.jocelohere.now.sh/',
      desc: 'Small Project generated using svelte JS and serverless technology for deploying the project. Created to particiate in a challenge launched by coderos youtube channel.'
    }]
  }

  ngOnInit() {
  }

}
