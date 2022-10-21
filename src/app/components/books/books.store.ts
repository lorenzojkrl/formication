import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';

export interface BooksState {
  wishList: string[];
  reading: string[];
  history: string[];
}

export const initialState = {
  wishList: ['Oksi', 'The Pragmatic Programmer', 'Let My People Go Surfing'],
  reading: ['4000 Weeks'],
  history: ['Zero To One', 'Extreme Economies'],
};

@Injectable()
export class BooksStore extends ComponentStore<BooksState> {
  readonly wishList$: Observable<string[]> = this.select(
    (state) => state.wishList
  );
  readonly reading$: Observable<String[]> = this.select(
    (state) => state.reading
  );
  readonly history$: Observable<String[]> = this.select(
    (state) => state.history
  );

  constructor() {
    super(initialState);
  }
}
