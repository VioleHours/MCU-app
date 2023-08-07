import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';
import { Countdown } from 'src/app/countdown';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies: Countdown[] = [];

  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.configService.getNextMovie().subscribe(
      (countdowns: Countdown[]) => {
        this.movies = countdowns;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
