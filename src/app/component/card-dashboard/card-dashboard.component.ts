import { Component, OnInit } from '@angular/core';
import { cardData } from '../const/data';
import { Icard1 } from '../model/card';

@Component({
  selector: 'app-card-dashboard',
  templateUrl: './card-dashboard.component.html',
  styleUrls: ['./card-dashboard.component.scss']
})
export class CardDashboardComponent  {

  cardArr:Icard1[]=cardData

}
