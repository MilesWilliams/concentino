import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarSectionComponent } from './sidebar-section/sidebar-section.component';
import { PageComponent } from './page/page.component';
import { SearchModule } from '../core-components/components/search/search.module';



@NgModule({
  imports: [
    CommonModule,
    SearchModule
  ],
  declarations: [SidebarSectionComponent, PageComponent],
  exports: [SidebarSectionComponent, PageComponent],
})
export class TemplatesModule { }
