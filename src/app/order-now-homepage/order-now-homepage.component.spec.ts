import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderNowHomepageComponent } from './order-now-homepage.component';

describe('OrderNowHomepageComponent', () => {
  let component: OrderNowHomepageComponent;
  let fixture: ComponentFixture<OrderNowHomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderNowHomepageComponent]
    });
    fixture = TestBed.createComponent(OrderNowHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
