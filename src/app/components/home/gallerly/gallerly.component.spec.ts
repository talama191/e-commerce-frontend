import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerlyComponent } from './gallerly.component';

describe('GallerlyComponent', () => {
  let component: GallerlyComponent;
  let fixture: ComponentFixture<GallerlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GallerlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
