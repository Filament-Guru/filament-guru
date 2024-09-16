import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminDeleteColorDialog } from './admin-delete-color.dialog';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { provideHttpClient } from '@angular/common/http';

describe('AdminDeleteColorDialogComponent', () => {
  let component: AdminDeleteColorDialog;
  let fixture: ComponentFixture<AdminDeleteColorDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDeleteColorDialog],
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

    fixture = TestBed.createComponent(AdminDeleteColorDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
