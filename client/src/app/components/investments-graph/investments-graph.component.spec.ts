import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentsGraphComponent } from './investments-graph.component';

describe('InvestmentsGraphComponent', () => {
  let component: InvestmentsGraphComponent;
  let fixture: ComponentFixture<InvestmentsGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentsGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
