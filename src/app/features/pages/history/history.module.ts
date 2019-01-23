import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './container/history.component';
import { TemplatesModule } from 'src/app/core/templates/templates.module';

@NgModule({
  imports: [
    CommonModule,
    TemplatesModule
  ],
  declarations: [HistoryComponent],
  exports: [HistoryComponent],
})
export class HistoryModule { }
