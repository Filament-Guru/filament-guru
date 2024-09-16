import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminCreateColorDialog } from './admin-create-color.dialog';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { provideHttpClient } from '@angular/common/http';

describe('AdminCreateColorDialogComponent', () => {
  let component: AdminCreateColorDialog;
  let fixture: ComponentFixture<AdminCreateColorDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCreateColorDialog],
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

    fixture = TestBed.createComponent(AdminCreateColorDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
