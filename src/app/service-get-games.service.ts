import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { gamePage } from './gamePagemodel';

@Injectable({
  providedIn: 'root',
})
export class ServiceGetGamesService {
  constructor(private http: HttpClient) {}

  getAllGames(URL: string) {
    return this.http.get<gamePage>(URL);
  }
}
