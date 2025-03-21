import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { BannerWrapperComponent } from "./banner-wrapper/banner-wrapper.component";
import { HowItWorksComponent } from "./how-it-works/how-it-works.component";
import { ExploreComponent } from "./explore/explore.component";
import { StatisticsCounterComponent } from "./statistics-counter/statistics-counter.component";
import { NewsArticlesComponent } from "./news-articles/news-articles.component";
import { CreateAccountComponent } from "./create-account/create-account.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    BannerWrapperComponent,
    HowItWorksComponent,
    ExploreComponent,
    StatisticsCounterComponent,
    NewsArticlesComponent,
    CreateAccountComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tailwind-css-with-angular';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.activatedRoute.fragment.subscribe((fragment: string | null) => {
        if (fragment) {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }
}
