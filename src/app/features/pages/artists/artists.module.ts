import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistsComponent } from './container/artists.component';
import { TemplatesModule } from 'src/app/core/templates/templates.module';

@NgModule({
  imports: [
    CommonModule,
    TemplatesModule
  ],
  declarations: [ArtistsComponent],
  exports: [ArtistsComponent]
})
export class ArtistsModule { }
