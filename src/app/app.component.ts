import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PageListComponent } from './page-list/page-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SearchBarComponent, PageListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'wsearch';

  onTerm(term: string) {
    console.log('I am the app comps and here is the term => ', term);
  }
}
