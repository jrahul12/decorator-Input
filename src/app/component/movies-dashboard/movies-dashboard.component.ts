import { Component, OnInit } from '@angular/core';
import { Imovies } from '../model/movies';
import { movieData } from '../const/movies';

@Component({
  selector: 'app-movies-dashboard',
  templateUrl: './movies-dashboard.component.html',
  styleUrls: ['./movies-dashboard.component.scss']
})
export class MoviesDashboardComponent  {

  moviesArr:Imovies[]=movieData

}
