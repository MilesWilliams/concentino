import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlaylistBtnComponent } from './add-playlist-btn.component';

describe('AddPlaylistBtnComponent', () => {
  let component: AddPlaylistBtnComponent;
  let fixture: ComponentFixture<AddPlaylistBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlaylistBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlaylistBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
