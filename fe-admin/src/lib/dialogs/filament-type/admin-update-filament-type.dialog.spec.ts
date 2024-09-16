import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminUpdateFilamentTypeDialog, UpdateFilamentTypeDialogData } from './admin-update-filament-type.dialog';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { provideHttpClient } from '@angular/common/http';

const dialogDummyData: UpdateFilamentTypeDialogData = {
  filamentType: {
    id: 1,
    slug: 'test',
    createdAt: new Date(),
    updatedAt: new Date()
  }
};

describe('AdminUpdateFilamentTypeDialogComponent', () => {
  let component: AdminUpdateFilamentTypeDialog;
  let fixture: ComponentFixture<AdminUpdateFilamentTypeDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUpdateFilamentTypeDialog],
      providers: [
        provideHttpClient(),
        {
          provide: DIALOG_DATA,
          useValue: {...dialogDummyData}
        },
        {
          provide: DialogRef,
          useValue: {}
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminUpdateFilamentTypeDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
