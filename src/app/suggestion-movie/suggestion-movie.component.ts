import {Component, OnInit} from '@angular/core';
import {MovieSaveRequest} from '../request/MovieSaveRequest';
import {Movie, MovieService} from '../services/movie-service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-suggestion-movie',
  templateUrl: './suggestion-movie.component.html',
  styleUrls: ['./suggestion-movie.component.css']
})
export class SuggestionMovieComponent implements OnInit {

  movieSaveRequest: MovieSaveRequest = new MovieSaveRequest();
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

  save() {
     this.movieService.saveMovie(this.movieSaveRequest)
      .subscribe(data => {
        alert('Movie created successfully.');
      });
  }

  protected onSubmit(f: NgForm): void {

    // code here

    f.resetForm();
  }

}
