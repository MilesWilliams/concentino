import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponentsModule } from './core-components/core-components.module';

@NgModule({
  imports: [
    CommonModule,
    CoreComponentsModule
  ],
  declarations: [],
  exports: [CoreComponentsModule]
})
export class CoreModule { }
