import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskpageComponent } from './riskpage.component';

describe('RiskpageComponent', () => {
  let component: RiskpageComponent;
  let fixture: ComponentFixture<RiskpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiskpageComponent]
    });
    fixture = TestBed.createComponent(RiskpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
