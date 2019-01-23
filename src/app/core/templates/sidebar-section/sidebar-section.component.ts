import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sidebar-section',
  templateUrl: './sidebar-section.component.html',
  styleUrls: ['./sidebar-section.component.scss']
})
export class SidebarSectionComponent implements OnInit {
  @Input() class_name: {[class_name: string]: boolean};
  constructor() { }

  ngOnInit() {
  }

  public determinClass(classes: {[class_name: string]: boolean}) {
    return Object.keys(classes).find(key => classes[key]);
  }

}
