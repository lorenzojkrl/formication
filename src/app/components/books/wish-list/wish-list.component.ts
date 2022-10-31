import { Component } from '@angular/core';
import { BooksStore } from '../books.store';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'],
  // Inject the store in the component
  providers: [BooksStore],
})
export class WishListComponent {
  // use the store to access the property we need
  wishList$ = this.booksStore.wishList$;

  // declare the store in the constructor
  constructor(private readonly booksStore: BooksStore) {}
}
