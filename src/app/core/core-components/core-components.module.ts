import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from './sidebar/sidebar.module';

@NgModule({
  imports: [
    CommonModule,
    SidebarModule
  ],
  declarations: [],
  exports: [SidebarModule]
})
export class CoreComponentsModule { }
