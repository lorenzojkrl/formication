import { Component } from '@angular/core';
import { BooksStore } from '../books.store';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.css'],
  providers: [BooksStore],
})
export class ReadingComponent {
  reading$ = this.booksStore.reading$;

  constructor(private readonly booksStore: BooksStore) {}
}
