import {Component, OnInit} from '@angular/core';
import {MovieSaveRequest} from '../request/MovieSaveRequest';
import {Movie, MovieService} from '../services/movie-service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  movieSaveRequest: MovieSaveRequest = new MovieSaveRequest();
  public movies: Movie;

  constructor(private movieService: MovieService,
              private router: Router) {
  }

  ngOnInit() {
  }

  save() {
    this.movieService.saveMovie(this.movieSaveRequest)
      .subscribe(data => {
        this.movies = data;
        const message = 'Movie created successfully.';
        alert(message);
      });
  }

  protected onSubmit(f: NgForm): void {
    f.resetForm();
  }

}
