import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarSectionComponent } from './sidebar-section/sidebar-section.component';
import { PageComponent } from './page/page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SidebarSectionComponent, PageComponent],
  exports: [SidebarSectionComponent, PageComponent],
})
export class TemplatesModule { }
