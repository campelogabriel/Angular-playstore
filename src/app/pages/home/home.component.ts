import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceGetGamesService } from 'src/app/service-get-games.service';
import { Game } from 'src/app/gameModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private urlString: string =
    'https://api.rawg.io/api/games?key=a5153414d3b44a94a3c726013e273eb8';

  private nextUrl: string;
  GamesPage: Game[];
  constructor(private myservice: ServiceGetGamesService) {}
  ngOnInit(): void {
    this.myservice.getAllGames(this.urlString).subscribe((res) => {
      this.GamesPage = res.results;
      this.nextUrl = res.next;
    });
  }

  getNewGames(): void {
    this.myservice.getAllGames(this.nextUrl).subscribe((res) => {
      this.GamesPage.push(...res.results);
      this.nextUrl = res.next;
    });
  }
}
