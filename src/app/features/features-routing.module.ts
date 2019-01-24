import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { RecommendationsComponent } from './pages/recommendations/container/recommendations.component';
import { HomeComponent } from './pages/home/container/home.component';
import { NewReleasesComponent } from './pages/new-releases/container/new-releases.component';
import { TopChartsComponent } from './pages/top-charts/container/top-charts.component';
import { RadioComponent } from './pages/radio/container/radio.component';
import { FeedComponent } from './pages/feed/container/feed.component';
import { FavouritesComponent } from './pages/favourites/container/favourites.component';
import { HistoryComponent } from './pages/history/container/history.component';
import { AlbumsComponent } from './pages/albums/container/albums.component';
import { ArtistsComponent } from './pages/artists/container/artists.component';
import { SongsComponent } from './pages/songs/container/songs.component';
import { SongsLoadedGuard } from './pages/songs/guards/onLoad.guard';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'recommendations',
        component: RecommendationsComponent
      },
      {
        path: 'new-releases',
        component: NewReleasesComponent
      },
      {
        path: 'top-charts',
        component: TopChartsComponent
      },
      {
        path: 'radio',
        component: RadioComponent
      },
      {
        path: 'feed',
        component: FeedComponent
      },
      {
        path: 'favourites',
        component: FavouritesComponent
      },
      {
        path: 'history',
        component: HistoryComponent
      },
      {
        path: 'albums',
        component: AlbumsComponent
      },
      {
        path: 'artists',
        component: ArtistsComponent
      },
      {
        path: 'songs',
        component: SongsComponent,
        canActivate: [SongsLoadedGuard]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
