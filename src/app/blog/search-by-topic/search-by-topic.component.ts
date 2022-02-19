import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-search-by-topic',
  templateUrl: './search-by-topic.component.html',
  styleUrls: ['./search-by-topic.component.scss']
})
export class SearchByTopicComponent implements OnInit {
  searchToken: string;
  articles: any;

  constructor(
    private route: ActivatedRoute,
    private service: BlogService
  ) { }

  ngOnInit(): void {
    this.searchToken = this.route.snapshot.paramMap.get('token');
    this.articles = this.service.getArticlesFiltered(this.searchToken);
  }

  public langImg(lang: string): string {
    if (lang === 'es') {
      return 'assets/mx.svg';
    } else {
      return 'assets/us.svg';
    }
  }

}
