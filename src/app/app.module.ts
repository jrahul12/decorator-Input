import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatCardModule } from "@angular/material/card";
import { ImageComponent } from './image/image.component';
import { MainComponent } from './main/main.component';
import { CardComponent } from './card/card.component';
import { MobileDashboardComponent } from './component/mobile-dashboard/mobile-dashboard.component';
import { MobileCardComponent } from './component/mobile-card/mobile-card.component';
import { MoviesDashboardComponent } from './component/movies-dashboard/movies-dashboard.component';
import { MoviesCardComponent } from './component/movies-card/movies-card.component';
import { CardDashboardComponent } from './component/card-dashboard/card-dashboard.component';
import { CardPosterComponent } from './component/card-poster/card-poster.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    MainComponent,
    CardComponent,
    MobileDashboardComponent,
    MobileCardComponent,
    MoviesDashboardComponent,
    MoviesCardComponent,
    CardDashboardComponent,
    CardPosterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
