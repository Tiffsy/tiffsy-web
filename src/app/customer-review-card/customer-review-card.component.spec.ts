import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReviewCardComponent } from './customer-review-card.component';

describe('CustomerReviewCardComponent', () => {
  let component: CustomerReviewCardComponent;
  let fixture: ComponentFixture<CustomerReviewCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerReviewCardComponent]
    });
    fixture = TestBed.createComponent(CustomerReviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
