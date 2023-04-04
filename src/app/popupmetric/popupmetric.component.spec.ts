import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupmetricComponent } from './popupmetric.component';

describe('PopupmetricComponent', () => {
  let component: PopupmetricComponent;
  let fixture: ComponentFixture<PopupmetricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupmetricComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupmetricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
