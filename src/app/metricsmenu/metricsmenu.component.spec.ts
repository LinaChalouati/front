import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricsmenuComponent } from './metricsmenu.component';

describe('MetricsmenuComponent', () => {
  let component: MetricsmenuComponent;
  let fixture: ComponentFixture<MetricsmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetricsmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetricsmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
