import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnounceDialogComponent } from './announce-dialog.component';

describe('AnnounceDialogComponent', () => {
  let component: AnnounceDialogComponent;
  let fixture: ComponentFixture<AnnounceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnounceDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnounceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
