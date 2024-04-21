import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  term = '';
  onInput(e: Event) {
    this.term = (e.target as HTMLInputElement).value;
  }
}
