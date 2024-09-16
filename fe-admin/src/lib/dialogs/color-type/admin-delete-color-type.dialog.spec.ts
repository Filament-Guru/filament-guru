import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminDeleteColorTypeDialog } from './admin-delete-color-type.dialog';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { provideHttpClient } from '@angular/common/http';

describe('AdminDeleteColorTypeDialogComponent', () => {
  let component: AdminDeleteColorTypeDialog;
  let fixture: ComponentFixture<AdminDeleteColorTypeDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDeleteColorTypeDialog],
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

    fixture = TestBed.createComponent(AdminDeleteColorTypeDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
