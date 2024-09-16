import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { UiButtonDirective } from './button.directive';
import { By } from '@angular/platform-browser';

@Component({
  template: `<button uiBtn [btnStyle]="'primary'">Button</button>`
})
class TestComponent {}

describe('UiButtonDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [UiButtonDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directiveEl = fixture.debugElement.query(By.directive(UiButtonDirective));
    expect(directiveEl).toBeTruthy();
  });
});
