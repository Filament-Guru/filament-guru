import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminUpdateFilamentTypeDialog } from './admin-update-filament-type.dialog';

describe('AdminUpdateFilamentTypeDialogComponent', () => {
  let component: AdminUpdateFilamentTypeDialog;
  let fixture: ComponentFixture<AdminUpdateFilamentTypeDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUpdateFilamentTypeDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminUpdateFilamentTypeDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
