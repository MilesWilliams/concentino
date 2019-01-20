import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistsComponent } from './container/playlists.component';
import { AddPlaylistBtnComponent } from './elements/add-playlist-btn/add-playlist-btn.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlaylistsComponent, AddPlaylistBtnComponent],
  exports: [PlaylistsComponent, AddPlaylistBtnComponent],
})
export class PlaylistsModule { }
