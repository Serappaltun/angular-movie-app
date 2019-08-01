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
    return this.http.get<Movie[]>('http://localhost:8080/movie/findAllMovies');
  }

  public findByTitle(title) {
    return this.http.get<Movie[]>('http://localhost:8080/movie/findByTitle' + '/' + title);
  }

  public delete(imdbID) {
    return this.http.delete<Movie[]>('http://localhost:8080/movie/deleteMovie' + '/' + imdbID);
  }

  public saveMovie(movieSaveRequest: MovieSaveRequest): Observable<Movie> {
    return this.http.post('http://localhost:8080/movie', movieSaveRequest);
  }

}
