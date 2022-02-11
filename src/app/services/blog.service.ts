import { Injectable } from '@angular/core';

import datesJson from '../../assets/blog/article-dates.json';
import readMoreJson from '../../assets/blog/article-read-more.json';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  articleDates = datesJson;
  articlesRelated = readMoreJson;

  constructor() { }

  private stripPostFromURL(fullUrl: string): string {
    const pieces = fullUrl.split('/');
    const last_piece = pieces[pieces.length - 1];
    const article_url = last_piece.split('#')[0];

    return article_url;
  }

  public getPostDate(postUrl: string): string {
    const article_url = this.stripPostFromURL(postUrl);

    if (article_url in this.articleDates) {
      return this.articleDates[article_url];
    }

    return 'not published';
  }

  public getRelatedArticles(postURL: string): any {
    const article_url = this.stripPostFromURL(postURL);

    if (article_url in this.articlesRelated) {
      return this.articlesRelated[article_url];
    }

    return [];
  }
}
