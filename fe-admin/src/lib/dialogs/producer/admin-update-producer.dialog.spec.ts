import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminUpdateProducerDialog, UpdateProducerDialogData } from './admin-update-producer.dialog';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { provideHttpClient } from '@angular/common/http';

const dialogDummyData: UpdateProducerDialogData = {
  producer: {
    id: 1,
    name: 'string',
    slug: 'string',
    createdAt: new Date(),
    updatedAt: new Date(),
    url: 'https://google.com',
  }
}

describe('AdminUpdateProducerDialogComponent', () => {
  let component: AdminUpdateProducerDialog;
  let fixture: ComponentFixture<AdminUpdateProducerDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUpdateProducerDialog],
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

    fixture = TestBed.createComponent(AdminUpdateProducerDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
