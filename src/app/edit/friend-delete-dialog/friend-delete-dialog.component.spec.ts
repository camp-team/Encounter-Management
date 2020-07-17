import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendDeleteDialogComponent } from './friend-delete-dialog.component';

describe('FriendDeleteDialogComponent', () => {
  let component: FriendDeleteDialogComponent;
  let fixture: ComponentFixture<FriendDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
