import { Component } from '@angular/core';
import { BannerSearchComponent } from "./banner-search/banner-search.component";
import { BannerTopicsComponent } from "./banner-topics/banner-topics.component";

@Component({
  selector: 'app-banner-wrapper',
  standalone: true,
  imports: [BannerSearchComponent, BannerTopicsComponent],
  templateUrl: './banner-wrapper.component.html',
  styleUrl: './banner-wrapper.component.scss'
})
export class BannerWrapperComponent {

}
