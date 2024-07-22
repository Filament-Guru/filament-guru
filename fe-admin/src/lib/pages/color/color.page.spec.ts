import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminColorPage } from './color.page';

describe('BrandComponent', () => {
  let component: AdminColorPage;
  let fixture: ComponentFixture<AdminColorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminColorPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminColorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
