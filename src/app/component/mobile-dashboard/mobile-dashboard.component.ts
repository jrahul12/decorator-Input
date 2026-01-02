import { Component, OnInit } from '@angular/core';
import { Imobile } from '../model/mobile';
import { mobileProducts } from '../const/mobile';

@Component({
  selector: 'app-mobile-dashboard',
  templateUrl: './mobile-dashboard.component.html',
  styleUrls: ['./mobile-dashboard.component.scss']
})
export class MobileDashboardComponent  {

  modelArr:Imobile[]=mobileProducts

}
