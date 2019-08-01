export class MovieSaveRequest {
  constructor(public imdbID: string,
              public title: string,
              public year: string,
              public type: string,
              public poster: string) {
  }
}
