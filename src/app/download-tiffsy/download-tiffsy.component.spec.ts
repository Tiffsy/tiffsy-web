import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadTiffsyComponent } from './download-tiffsy.component';

describe('DownloadTiffsyComponent', () => {
  let component: DownloadTiffsyComponent;
  let fixture: ComponentFixture<DownloadTiffsyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownloadTiffsyComponent]
    });
    fixture = TestBed.createComponent(DownloadTiffsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
