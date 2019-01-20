import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './container/feed.component';
import { TemplatesModule } from 'src/app/core/core-components/templates/templates.module';

@NgModule({
  imports: [
    CommonModule,
    TemplatesModule
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
})
export class FeedModule { }
