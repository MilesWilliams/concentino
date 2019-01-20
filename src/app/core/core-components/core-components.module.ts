import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { TitleBarModule } from './components/title-bar/title-bar.module';

@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
    TitleBarModule
  ],
  declarations: [],
  exports: [SidebarModule, TitleBarModule]
})
export class CoreComponentsModule { }
