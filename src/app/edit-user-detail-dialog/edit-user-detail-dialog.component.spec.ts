import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserDetailDialogComponent } from './edit-user-detail-dialog.component';

describe('EditUserDetailDialogComponent', () => {
  let component: EditUserDetailDialogComponent;
  let fixture: ComponentFixture<EditUserDetailDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditUserDetailDialogComponent]
    });
    fixture = TestBed.createComponent(EditUserDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
