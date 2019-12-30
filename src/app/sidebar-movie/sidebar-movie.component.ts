import {Component, OnInit} from '@angular/core';
import {MovieSaveRequest} from '../request/MovieSaveRequest';
import {Movie, MovieService} from '../services/movie-service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-sidebar-movie',
  templateUrl: './sidebar-movie.component.html',
  styleUrls: ['./sidebar-movie.component.css']
})
export class SidebarMovieComponent implements OnInit {

  ngOnInit() {
  }
}
