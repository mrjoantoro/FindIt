import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FindPage } from './find.page';

describe('FindPage', () => {
  let component: FindPage;
  let fixture: ComponentFixture<FindPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
