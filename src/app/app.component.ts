import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoreState } from './core/store';
import {SidebarNavigation, ConcentinoIcons} from './core/configs/sidebar-navigation.config';
import { LoadNavigationRoutes } from './core/core-components/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'concentino';

  constructor(private _store: Store<CoreState>) {
    this._store.dispatch(new LoadNavigationRoutes())
  }
}
