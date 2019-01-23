import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsComponent } from './container/songs.component';
import { TemplatesModule } from 'src/app/core/templates/templates.module';
import { SongComponent } from './components/song/song.component';

@NgModule({
  imports: [
    CommonModule,
    TemplatesModule
  ],
  declarations: [SongsComponent, SongComponent],
  exports: [SongsComponent]
})
export class SongsModule { }
