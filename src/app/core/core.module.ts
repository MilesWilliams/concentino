import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponentsModule } from './core-components/core-components.module';
import { services } from './services';

@NgModule({
  imports: [
    CommonModule,
    CoreComponentsModule
  ],
  declarations: [],
  exports: [CoreComponentsModule],
  providers: [...services]
})
export class CoreModule { }
