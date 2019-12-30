import {Component, OnInit} from '@angular/core';
import {MovieSaveRequest} from '../request/MovieSaveRequest';
import {Movie, MovieService} from '../services/movie-service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-header-movie',
  templateUrl: './header-movie.component.html',
  styleUrls: ['./header-movie.component.css']
})
export class HeaderMovieComponent implements OnInit {

  public movies: Movie[];
  title: string;

  constructor(private movieService: MovieService,
              private router: Router) {
  }

  ngOnInit() {
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

}
