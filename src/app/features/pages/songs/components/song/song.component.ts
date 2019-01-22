import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'concentino-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {
  @Input() song: any;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
