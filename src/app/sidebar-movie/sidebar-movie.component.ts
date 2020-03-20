import {Component, OnInit} from '@angular/core';
import {MovieService} from '../services/movie-service';
import {Router} from '@angular/router';
import {StoryResponse} from "../response/story-response";

@Component({
  selector: 'app-sidebar-movie',
  templateUrl: './sidebar-movie.component.html',
  styleUrls: ['./sidebar-movie.component.css']
})
export class SidebarMovieComponent implements OnInit {

  public stories: any;

  constructor(private storyService: MovieService,
              private router: Router) {
  }
  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.storyService.getStoryName()
      .subscribe(data => {
        this.stories = data;
      });
  }
}
