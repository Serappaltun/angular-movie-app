import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MovieComponent} from './movie/movie.component';
import {MovieService} from './services/movie-service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {StoreComponent} from "./store/store.component";
import {StoreService} from "./services/store-service";
import {AddMovieComponent} from "./add-movie/add-movie.component";
import {HeaderMovieComponent} from "./header-movie/header-movie.component";
import {FooterMovieComponent} from "./footer-movie/footer-movie.component";
import {SidebarMovieComponent} from "./sidebar-movie/sidebar-movie.component";
import {SuggestionMovieComponent} from "./suggestion-movie/suggestion-movie.component";

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    StoreComponent,
    AddMovieComponent,
    HeaderMovieComponent,
    FooterMovieComponent,
    SidebarMovieComponent,
    SuggestionMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MovieService,
    StoreService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
