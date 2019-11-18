import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts = {
    latest:[],
    mostLiked:[]
  };
  byCategory = [
    {title: 'JavaScript', postsLen: 16, icon: 'js'},
    {title: 'CSS', postsLen: 10, icon: 'css'},
    {title: 'Computer Vision', postsLen: 20, icon: 'vision'},
    {title: 'angularJS', postsLen: 27, icon: 'angular'},
  ];

  constructor() { }

  ngOnInit() {
    this.posts = {
      latest: [      
        {id: 1, title: 'Basic css shapes Go', date: 'Oct 15, 2019', abstract:'Small project idea to showcase the different ways you can create basic trigonometric shapes using only CSS'},
        {id: 2, title: 'Searching for a Job in tech', date:'Oct 10, 2019', abstract:'My personal Journey while searching a job in tech in U.S.A.'},
        {id: 3, title: 'Latin guy in tech', date:'Oct 9, 2019', abstract: 'The ins/outs of a latin guy working in a completely indian tech company.'}
      ],
      mostLiked: [
        {id: 7, title: 'CSS Less', date:'Nov 1, 2019', 'likes': 39},
        {id: 8, title: 'CSS basic trigonometric shapes', date:'Nov 10, 2019', likes: 35},
        {id: 9, title: 'How to study algorithms', date:'July 4, 2019', likes: 29}
      ]
    };
  }

}
