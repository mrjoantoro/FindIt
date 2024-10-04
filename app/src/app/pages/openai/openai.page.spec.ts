import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OpenaiPage } from './openai.page';

describe('OpenaiPage', () => {
  let component: OpenaiPage;
  let fixture: ComponentFixture<OpenaiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenaiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
