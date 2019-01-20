import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarSectionComponent } from './templates/sidebar-section/sidebar-section.component';
import { SidebarComponent } from './container/sidebar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SidebarSectionComponent, SidebarComponent],
  exports: [SidebarComponent]
})
export class SidebarModule { }
