import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-header-form',
  standalone: true,
  imports: [MatSelectModule, FormsModule, MatFormFieldModule],
  templateUrl: './header-form.component.html',
  styleUrl: './header-form.component.scss',
})
export class HeaderFormComponent {

}
