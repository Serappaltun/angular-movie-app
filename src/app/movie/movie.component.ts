import {Component, OnInit} from '@angular/core';
import {Movie, MovieService} from '../services/movie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  public movies: Movie[];
  title: string;

  constructor(private movieService: MovieService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.fetchData();

  }

  search() {
    if (this.title != null) {
      this.movieService.findByTitle(this.title)
        .subscribe(data => {
          this.movies = data;
        });
    } else {
      this.movieService.getMovies()
        .subscribe(data => {
          this.movies = data;
        });
    }
  }

  delete(movie: Movie) {
    this.movieService.delete(movie.imdbID)
      .subscribe(data => {
        this.fetchData();
      });
  }

  fetchData() {
    this.movieService.getMovies()
      .subscribe(data => {
        this.movies = data;
      });
  }

}
