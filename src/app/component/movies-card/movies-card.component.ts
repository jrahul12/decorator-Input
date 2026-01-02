import { Component, Input, OnInit } from '@angular/core';
import { Imovies } from '../model/movies';

@Component({
  selector: 'app-movies-card',
  templateUrl: './movies-card.component.html',
  styleUrls: ['./movies-card.component.scss']
})
export class MoviesCardComponent  {

  @Input() movie!:Imovies

}
