import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddMovieComponent} from "./add-movie/add-movie.component";
import {SuggestionMovieComponent} from "./suggestion-movie/suggestion-movie.component";
import {MovieComponent} from "./movie/movie.component";


const routes: Routes = [

  {path: 'suggestionMovie', component: SuggestionMovieComponent},
  {path: 'movie', component: MovieComponent},
  {path: 'addMovie', component: AddMovieComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
