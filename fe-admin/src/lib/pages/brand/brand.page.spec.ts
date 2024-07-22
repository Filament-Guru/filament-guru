import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminBrandPage } from '../brand.page';

describe('BrandComponent', () => {
  let component: AdminBrandPage;
  let fixture: ComponentFixture<AdminBrandPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminBrandPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminBrandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
