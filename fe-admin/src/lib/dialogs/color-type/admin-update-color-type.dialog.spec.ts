import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminUpdateColorTypeDialog, UpdateColorTypeDialogData } from './admin-update-color-type.dialog';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { provideHttpClient } from '@angular/common/http';

const dialogDummyData: UpdateColorTypeDialogData = {
  colorType: {
    id: 1,
    slug: 'test',
    createdAt: new Date(),
    updatedAt: new Date()
  }
};

describe('AdminUpdateColorTypeDialogComponent', () => {
  let component: AdminUpdateColorTypeDialog;
  let fixture: ComponentFixture<AdminUpdateColorTypeDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUpdateColorTypeDialog],
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

    fixture = TestBed.createComponent(AdminUpdateColorTypeDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
