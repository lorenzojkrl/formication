import { Component } from '@angular/core';
import { BooksStore } from '../books.store';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'],
})
export class WishListComponent {
  // use the store to access the property we need
  wishList$ = this.booksStore.wishList$;

  // declare the store in the constructor
  constructor(private readonly booksStore: BooksStore) {}

  handleClick(title: string) {
    this.booksStore.moveToReading(title);
  }
}
