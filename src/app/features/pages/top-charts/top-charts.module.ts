import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopChartsComponent } from './container/top-charts.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TopChartsComponent],
  exports: [TopChartsComponent],
})
export class TopChartsModule { }
