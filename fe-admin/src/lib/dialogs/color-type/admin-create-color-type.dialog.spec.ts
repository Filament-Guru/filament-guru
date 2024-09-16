import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminCreateColorTypeDialog } from './admin-create-color-type.dialog';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { provideHttpClient } from '@angular/common/http';

describe('AdminCreateColorTypeDialogComponent', () => {
  let component: AdminCreateColorTypeDialog;
  let fixture: ComponentFixture<AdminCreateColorTypeDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCreateColorTypeDialog],
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

    fixture = TestBed.createComponent(AdminCreateColorTypeDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
