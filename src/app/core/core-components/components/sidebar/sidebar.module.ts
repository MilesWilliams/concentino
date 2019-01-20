import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './container/sidebar.component';
import { PlaylistsModule } from 'src/app/features/pages/playlists/playlists.module';
import { TemplatesModule } from '../../templates/templates.module';

@NgModule({
  imports: [
    CommonModule,
    PlaylistsModule,
    TemplatesModule
  ],
  declarations: [SidebarComponent],
  exports: [SidebarComponent]
})
export class SidebarModule { }
