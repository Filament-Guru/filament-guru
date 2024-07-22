import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminCreateFilamentTypeDialog } from './admin-create-filament-type.dialog';

describe('AdminCreateFilamentTypeDialogComponent', () => {
  let component: AdminCreateFilamentTypeDialog;
  let fixture: ComponentFixture<AdminCreateFilamentTypeDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCreateFilamentTypeDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminCreateFilamentTypeDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
