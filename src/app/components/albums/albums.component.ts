import { Component, OnInit } from '@angular/core';
import { AlbumsStore } from './albums.store';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  providers: [AlbumsStore],
})
export class AlbumsComponent implements OnInit {
  albums$ = this.albumsStore.albums$;

  constructor(private readonly albumsStore: AlbumsStore) {}

  ngOnInit(): void {
    this.albumsStore.loadAlbums();
  }
}
