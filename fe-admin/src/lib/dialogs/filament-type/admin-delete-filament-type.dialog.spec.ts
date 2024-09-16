import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminDeleteFilamentTypeDialog } from './admin-delete-filament-type.dialog';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { provideHttpClient } from '@angular/common/http';

describe('AdminDeleteFilamentTypeDialogComponent', () => {
  let component: AdminDeleteFilamentTypeDialog;
  let fixture: ComponentFixture<AdminDeleteFilamentTypeDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDeleteFilamentTypeDialog],
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

    fixture = TestBed.createComponent(AdminDeleteFilamentTypeDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
