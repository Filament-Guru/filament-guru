import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminDeleteBrandDialog } from './admin-delete-brand.dialog';

describe('AdminDeleteBrandDialogComponent', () => {
  let component: AdminDeleteBrandDialog;
  let fixture: ComponentFixture<AdminDeleteBrandDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDeleteBrandDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminDeleteBrandDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
