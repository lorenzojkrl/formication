import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { catchError, EMPTY, Observable, switchMap, tap } from 'rxjs';
import { AlbumsService } from 'src/app/services/albums.service';
import { Album, AlbumsState } from 'src/app/models/albums';

const initialState = {
  albums: [],
};

@Injectable()
export class AlbumsStore extends ComponentStore<AlbumsState> {
  constructor(private readonly albumsService: AlbumsService) {
    super(initialState);
  }

  // SELECT: READ
  readonly albums$: Observable<Album[]> = this.select((state) => state.albums);

  // UPDATER: WRITE
  readonly initializeAlbums = this.updater((state, albums: Album[]) => ({
    albums: albums,
  }));

  // EFFECTS
  readonly loadAlbums = this.effect((trigger$) =>
    trigger$.pipe(
      switchMap(() =>
        this.albumsService.fetchAlbums().pipe(
          tap((albums: Album[]) => this.setState({ albums })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
