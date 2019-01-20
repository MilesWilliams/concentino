import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewReleasesComponent } from './container/new-releases.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NewReleasesComponent],
  exports: [NewReleasesComponent],
})
export class NewReleasesModule { }
