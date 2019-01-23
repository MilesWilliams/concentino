import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioComponent } from './container/radio.component';
import { TemplatesModule } from 'src/app/core/templates/templates.module';

@NgModule({
  imports: [
    CommonModule,
    TemplatesModule
  ],
  declarations: [RadioComponent],
  exports: [RadioComponent],
})
export class RadioModule { }
