import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminDeleteFilamentTypeDialog } from './admin-delete-filament-type.dialog';

describe('AdminDeleteFilamentTypeDialogComponent', () => {
  let component: AdminDeleteFilamentTypeDialog;
  let fixture: ComponentFixture<AdminDeleteFilamentTypeDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDeleteFilamentTypeDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminDeleteFilamentTypeDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
