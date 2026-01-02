import { Component, Input, OnInit } from '@angular/core';
import { Icard1 } from '../model/card';

@Component({
  selector: 'app-card-poster',
  templateUrl: './card-poster.component.html',
  styleUrls: ['./card-poster.component.scss']
})
export class CardPosterComponent  {

@Input() card!:Icard1

}
