import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminCreateFilamentTypeDialog } from './admin-create-filament-type.dialog';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { provideHttpClient } from '@angular/common/http';

describe('AdminCreateFilamentTypeDialogComponent', () => {
  let component: AdminCreateFilamentTypeDialog;
  let fixture: ComponentFixture<AdminCreateFilamentTypeDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCreateFilamentTypeDialog],
      providers: [
        provideHttpClient(),
        {
          provide: DIALOG_DATA,
          useValue: {}
        },
        {
          provide: DialogRef,
          useValue: {}
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminCreateFilamentTypeDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
