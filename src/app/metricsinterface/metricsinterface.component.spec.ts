import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricsinterfaceComponent } from './metricsinterface.component';

describe('MetricsinterfaceComponent', () => {
  let component: MetricsinterfaceComponent;
  let fixture: ComponentFixture<MetricsinterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetricsinterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetricsinterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
