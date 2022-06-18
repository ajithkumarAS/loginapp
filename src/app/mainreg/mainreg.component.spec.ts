import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainregComponent } from './mainreg.component';

describe('MainregComponent', () => {
  let component: MainregComponent;
  let fixture: ComponentFixture<MainregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainregComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
