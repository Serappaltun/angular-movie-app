import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MovieComponent} from './movie/movie.component';
import {MovieService} from './services/movie-service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AddMovieComponent } from './add-movie/add-movie.component';

@NgModule({
   declarations: [
      AppComponent,
      MovieComponent,
      AddMovieComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [
      MovieService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {
}
