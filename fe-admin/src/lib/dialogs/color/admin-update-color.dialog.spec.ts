import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminUpdateColorDialog, UpdateColorDialogData } from './admin-update-color.dialog';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { provideHttpClient } from '@angular/common/http';

const dialogDummyData: UpdateColorDialogData = {
  color: {
    id: 1,
    name: 'string',
    slug: 'string',
    createdAt: new Date(),
    updatedAt: new Date()
  }
}

describe('AdminUpdateColorDialogComponent', () => {
  let component: AdminUpdateColorDialog;
  let fixture: ComponentFixture<AdminUpdateColorDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUpdateColorDialog],
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

    fixture = TestBed.createComponent(AdminUpdateColorDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
