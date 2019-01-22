import { Component, OnInit } from '@angular/core';
import { FileManagerService } from 'src/app/core/services/file-manager/file-manager.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'concentino-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {
  public files$: Observable<any[]>;
  constructor(private _svc: FileManagerService) { }

  ngOnInit() {
    this.files$ = this._svc.getAllSongs({path: '/Users/miles/Music'});
  }

  formatIndex(index: number): number | string {
    if (index >= 10) 
      return index;

    return  index === 1 ? "01" : `0${index}`;
  }

}
