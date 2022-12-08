import { Component } from '@angular/core';
import { BooksStore } from './books.store';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [BooksStore],
})
export class BooksComponent {}
