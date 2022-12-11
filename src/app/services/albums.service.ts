import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../models/albums';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  private albumsURL = 'https://jsonplaceholder.typicode.com/albums';
  constructor(private httpClient: HttpClient) {}

  fetchAlbums(): Observable<Album[]> {
    return this.httpClient.get<Album[]>(this.albumsURL);
  }
}
