import { Component } from '@angular/core';
import { HeaderFormComponent } from './header-form/header-form.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderFormComponent, HeaderNavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  navStatus: boolean = true;
}
