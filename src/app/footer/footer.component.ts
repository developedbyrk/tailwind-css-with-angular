import { Component } from '@angular/core';
import { FooterNavComponent } from "./footer-nav/footer-nav.component";
import { SocialComponent } from "./social/social.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FooterNavComponent, SocialComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
