import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  @Output() submitted = new EventEmitter<string>();

  term = '';

  onFormSubmit(e: any) {
    e.preventDefault();
    this.submitted.emit(this.term);
  }
}
