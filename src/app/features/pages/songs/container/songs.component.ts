import { Component, OnInit } from '@angular/core';
import { FileManagerService } from 'src/app/core/services/file-manager/file-manager.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ISongsState } from 'src/app/features/store/reducers/songs.reducer';
import { getAllSongs, LoadSongs, LoadSongsSuccess } from 'src/app/features/store';

@Component({
  selector: 'concentino-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {
  public files$: Observable<any[]>;
  constructor(private _svc: FileManagerService, private _store: Store<ISongsState>) { }

  ngOnInit() {
    // this._svc.getAllSongs({path: '/Users/miles/Music'}).subscribe(
    //   {
    //     next: res =>  {
    //       console.log(res['Files']);
    //       this._store.dispatch(new LoadSongsSuccess(res['Files']));
    //     }
    //   }
    // );
    console.log(this._store.select(getAllSongs));
    this.files$ = this._store.select(getAllSongs);
  }

  formatIndex(index: number): number | string {
    if (index >= 10) 
      return index;

    return  index === 1 ? "01" : `0${index}`;
  }

}
