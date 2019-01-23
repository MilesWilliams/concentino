import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { TitleBarModule } from './components/title-bar/title-bar.module';
import { SearchModule } from './components/search/search.module';

@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
    TitleBarModule,
    SearchModule
  ],
  exports: [SidebarModule, TitleBarModule, SearchModule]
})
export class CoreComponentsModule { }
