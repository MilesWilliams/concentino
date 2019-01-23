import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopChartsComponent } from './container/top-charts.component';
import { TemplatesModule } from 'src/app/core/templates/templates.module';

@NgModule({
  imports: [
    CommonModule,
    TemplatesModule
  ],
  declarations: [TopChartsComponent],
  exports: [TopChartsComponent],
})
export class TopChartsModule { }
