import { Injectable } from '@angular/core';

import datesJson from '../../assets/blog/article-dates.json';
import readMoreJson from '../../assets/blog/article-read-more.json';
import articlesJson from '../../assets/blog/article.json';
import blindLeetcodeJson from '../../assets/blog/blind-leetcode.json';

export interface ArticleEntry {
  no: number;
  done: boolean;
  title: string;
  leetcode: string;
  video: string;
  article: string;
  mainTopic: string;
  solution: {
    javascript: string;
    java: string;
    php: string;
    python: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  articleDates = datesJson;
  articlesRelated = readMoreJson;
  articles = articlesJson;
  blindLeetcode: ArticleEntry[] = blindLeetcodeJson;

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

  public getArticleTopics(article: string): any {
    const article_url = this.stripPostFromURL(article);

    if (article_url in this.articles) {
      return this.articles[article_url].topics;
    }

    return [];
  }

  public getArticlesFiltered(keyword: string): any {
    const articles = Object.entries(this.articles).filter(article => article[1].topics.indexOf(keyword) > -1);
    articles.forEach(article => {
      article[1]['lastUpdate'] = this.getPostDate(article[0]);
    });
    return articles;
  }

  public getBlindLeetcodeList(): ArticleEntry[] {
    return this.blindLeetcode;
  }
}
