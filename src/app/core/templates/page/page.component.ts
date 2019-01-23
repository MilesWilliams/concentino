import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoreState } from 'src/app/core/store';
import { Observable } from 'rxjs';
import { NavItem } from 'src/app/core/interfaces/sidebar-nav.interface';
import { getActiveRoute } from '../../core-components/store/selectors/navigation.selectors';


@Component({
	selector: 'concentino-page',
	templateUrl: './page.component.html',
	styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
	activeRoute$: Observable<NavItem>;
	
	constructor(private _store: Store<CoreState>) {
		this.activeRoute$ = this._store.select(getActiveRoute);
	}

	ngOnInit() {
	}

}
