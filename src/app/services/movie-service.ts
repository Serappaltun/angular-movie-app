import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MovieSaveRequest} from '../request/MovieSaveRequest';
import {UrlConstant} from "../utils/url-constant/url-constant";
import {StoryResponse} from "../response/story-response";

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
    return this.http.get<Movie[]>(UrlConstant.HTTP_URL + 'movies/findAllMovies');
  }

  public findByTitle(title) {
    return this.http.get<Movie[]>(UrlConstant.HTTP_URL + 'movies/findByTitle' + '/' + title);
  }

  public delete(imdbID) {
    return this.http.delete<Movie[]>(UrlConstant.HTTP_URL + 'movies/deleteMovie' + '/' + imdbID);
  }

  public saveMovie(movieSaveRequest: MovieSaveRequest) {
    return this.http.post<Movie>(UrlConstant.HTTP_URL + 'movies', movieSaveRequest);
  }

  public getStoryName() {
    return this.http.get(UrlConstant.HTTP_URL + 'story/stories-name');
  }

}
