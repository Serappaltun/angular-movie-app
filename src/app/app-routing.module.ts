import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AddMovieComponent} from './add-movie/add-movie.component';
import {MovieComponent} from './movie/movie.component';


const routes: Routes = [

  {path: '', component: MovieComponent},
  {path: 'addmovie', component: AddMovieComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
