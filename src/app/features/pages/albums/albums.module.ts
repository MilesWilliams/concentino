import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './container/albums.component';
import { TemplatesModule } from 'src/app/core/core-components/templates/templates.module';

@NgModule({
  imports: [
    CommonModule,
    TemplatesModule
  ],
  declarations: [AlbumsComponent],
  exports: [AlbumsComponent]
})
export class AlbumsModule { }
