import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapehComponent } from './mapeh.component';

describe('MapehComponent', () => {
  let component: MapehComponent;
  let fixture: ComponentFixture<MapehComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapehComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapehComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
