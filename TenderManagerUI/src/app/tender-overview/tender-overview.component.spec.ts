import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderOverviewComponent } from './tender-overview.component';

describe('TenderOverviewComponent', () => {
  let component: TenderOverviewComponent;
  let fixture: ComponentFixture<TenderOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenderOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenderOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
