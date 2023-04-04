import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigsystemComponent } from './configsystem.component';

describe('ConfigsystemComponent', () => {
  let component: ConfigsystemComponent;
  let fixture: ComponentFixture<ConfigsystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigsystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigsystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
