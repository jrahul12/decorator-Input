import { Component, OnInit } from '@angular/core';
import { Icard, Iimage} from '../component/model/type';
import { cardData, imageData } from '../component/const/data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent  {

cardArr:Icard[]=cardData

imageArr:Iimage[]=imageData


}
