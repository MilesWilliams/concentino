import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features/features.component';
import { RecommendationsModule } from './pages/recommendations/recommendations.module';
import { HomeModule } from './pages/home/home.module';
import { FeedModule } from './pages/feed/feed.module';
import { TopChartsModule } from './pages/top-charts/top-charts.module';
import { HistoryModule } from './pages/history/history.module';
import { NewReleasesModule } from './pages/new-releases/new-releases.module';
import { FavouritesModule } from './pages/favourites/favourites.module';
import { RadioModule } from './pages/radio/radio.module';
import { ArtistsModule } from './pages/artists/artists.module';
import { AlbumsModule } from './pages/albums/albums.module';
import { SongsModule } from './pages/songs/songs.module';


@NgModule({
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    RecommendationsModule,
    HomeModule,
    FeedModule,
    TopChartsModule,
    HistoryModule,
    NewReleasesModule,
    FavouritesModule,
    RadioModule,
    ArtistsModule,
    AlbumsModule,
    SongsModule

  ],
  declarations: [FeaturesComponent],
  exports: [FeaturesComponent],
})
export class FeaturesModule { }
