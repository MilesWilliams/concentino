import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouritesComponent } from './container/favourites.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FavouritesComponent],
  exports: [FavouritesComponent],
})
export class FavouritesModule { }
