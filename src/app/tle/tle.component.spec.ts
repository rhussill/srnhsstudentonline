import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TleComponent } from './tle.component';

describe('TleComponent', () => {
  let component: TleComponent;
  let fixture: ComponentFixture<TleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
