import { Component, OnInit } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import {SidebarNavigation, ConcentinoIcons} from '../../../configs/sidebar-navigation.config';
import { Store } from '@ngrx/store';
import { CoreState, Go } from 'src/app/core/store';
import { getRoutes } from '../store/selectors';
import { SidebarNavigationInterface } from 'src/app/core/interfaces/sidebar-nav.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'concentino-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sections$: Observable<SidebarNavigationInterface[]>;
  icons = ConcentinoIcons;
    
  constructor(private _store: Store<CoreState>, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.sections$ = this._store.select(getRoutes)
  }

  public sanitizeSvg(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.icons[svg]());
  }

  public onRoute(path: string) {
    this._store.dispatch(new Go({
      path: [path]
    }))
  }
}
