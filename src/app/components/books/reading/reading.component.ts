import { Component } from '@angular/core';
import { BooksStore } from '../books.store';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.css'],
})
export class ReadingComponent {
  reading$ = this.booksStore.reading$;

  constructor(private readonly booksStore: BooksStore) {}

  handleClick(title: string) {
    this.booksStore.setState((state) => ({
      ...state,
      reading: [
        ...state.reading.filter((titleInList) => titleInList !== title),
      ],
      history: [...state.history, title],
    }));
  }
}
