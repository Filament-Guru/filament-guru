import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { UiInputDirective } from './input.directive';
import { By } from '@angular/platform-browser';

@Component({
  template: `<input uiInput [inputState]="'neutral'" [hasIcon]="false">`
})
class TestComponent {}

describe('UiInputDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [UiInputDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directiveEl = fixture.debugElement.query(By.directive(UiInputDirective));
    expect(directiveEl).toBeTruthy();
  });
});
