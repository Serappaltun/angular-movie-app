import {Component, OnInit} from '@angular/core';
import {MovieSaveRequest} from '../request/MovieSaveRequest';
import {Movie, MovieService} from '../services/movie-service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-footer-movie',
  templateUrl: './footer-movie.component.html',
  styleUrls: ['./footer-movie.component.css']
})
export class FooterMovieComponent implements OnInit {

  ngOnInit() {
  }
}
