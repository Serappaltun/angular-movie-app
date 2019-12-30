import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MovieComponent} from './movie/movie.component';
import {AddMovieComponent} from "./add-movie/add-movie.component";


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
