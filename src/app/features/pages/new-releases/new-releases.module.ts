import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewReleasesComponent } from './container/new-releases.component';
import { TemplatesModule } from 'src/app/core/core-components/templates/templates.module';

@NgModule({
  imports: [
    CommonModule,
    TemplatesModule
  ],
  declarations: [NewReleasesComponent],
  exports: [NewReleasesComponent],
})
export class NewReleasesModule { }
