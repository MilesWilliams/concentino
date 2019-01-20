import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioComponent } from './container/radio.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RadioComponent],
  exports: [RadioComponent],
})
export class RadioModule { }
