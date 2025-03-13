import { Component } from '@angular/core';

@Component({
  selector: 'app-news-articles',
  standalone: true,
  imports: [],
  templateUrl: './news-articles.component.html',
  styleUrl: './news-articles.component.scss',
})
export class NewsArticlesComponent {
  articles = [
    {
      image: 'assets/images/b1.jpg',
      title: '10 Hidden Gems Around the World You Need to Visit in 2025',
    },
    {
      image: 'assets/images/b2.jpg',
      title: 'How to find your Desired Place more quickly',
    },
    {
      image: 'assets/images/b3.jpg',
      title:
        'The Ultimate Guide to Solo Travel: Tips, Destinations, and Safety Advice',
    },
  ];
}
