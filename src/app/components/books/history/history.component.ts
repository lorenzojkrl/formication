import { Component } from '@angular/core';
import { BooksStore } from '../books.store';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent {
  history$ = this.booksStore.history$;

  constructor(private readonly booksStore: BooksStore) {}
}
