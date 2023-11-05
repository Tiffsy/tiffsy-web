import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGuideDashboardComponent } from './app-guide-dashboard.component';

describe('AppGuideDashboardComponent', () => {
  let component: AppGuideDashboardComponent;
  let fixture: ComponentFixture<AppGuideDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppGuideDashboardComponent]
    });
    fixture = TestBed.createComponent(AppGuideDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
