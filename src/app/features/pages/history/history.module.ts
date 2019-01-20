import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './container/history.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HistoryComponent],
  exports: [HistoryComponent],
})
export class HistoryModule { }
