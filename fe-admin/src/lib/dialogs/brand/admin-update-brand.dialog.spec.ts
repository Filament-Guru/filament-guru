import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminUpdateBrandDialog } from './admin-update-brand.dialog';

describe('AdminUpdateBrandDialogComponent', () => {
  let component: AdminUpdateBrandDialog;
  let fixture: ComponentFixture<AdminUpdateBrandDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUpdateBrandDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminUpdateBrandDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
