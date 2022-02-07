import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-by-topic',
  templateUrl: './search-by-topic.component.html',
  styleUrls: ['./search-by-topic.component.scss']
})
export class SearchByTopicComponent implements OnInit {
  searchToken: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.searchToken = this.route.snapshot.paramMap.get('token');

  }

}
