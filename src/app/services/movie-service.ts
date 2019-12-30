import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MovieSaveRequest} from '../request/MovieSaveRequest';
import {Observable} from 'rxjs';

export class Movie {
  constructor(public imdbID: string,
              public Title: string,
              public Year: string,
              public Type: string,
              public Poster: string) {
  }
}


@Injectable()
export class MovieService {

  constructor(private http: HttpClient) {
  }

  public getMovies() {
    return this.http.get<Movie[]>('http://localhost:8082/movies/findAllMovies');
  }

  public findByTitle(title) {
    return this.http.get<Movie[]>('http://localhost:8082/movies/findByTitle' + '/' + title);
  }

  public delete(imdbID) {
    return this.http.delete<Movie[]>('http://localhost:8082/movies/deleteMovie' + '/' + imdbID);
  }

  public saveMovie(movieSaveRequest: MovieSaveRequest) {
    return this.http.post<Movie>('http://localhost:8082/movies', movieSaveRequest);
  }

}
