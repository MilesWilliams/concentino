import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouritesComponent } from './container/favourites.component';
import { TemplatesModule } from 'src/app/core/core-components/templates/templates.module';

@NgModule({
  imports: [
    CommonModule,
    TemplatesModule
  ],
  declarations: [FavouritesComponent],
  exports: [FavouritesComponent],
})
export class FavouritesModule { }
