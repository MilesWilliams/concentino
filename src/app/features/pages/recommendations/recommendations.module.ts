import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendationsComponent } from './container/recommendations.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RecommendationsComponent],  
  exports: [RecommendationsComponent],
})
export class RecommendationsModule { }
