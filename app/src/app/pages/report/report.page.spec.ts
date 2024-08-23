import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportPage } from './report.page';

describe('ReportPage', () => {
  let component: ReportPage;
  let fixture: ComponentFixture<ReportPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
