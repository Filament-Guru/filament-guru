import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminDeleteProducerDialog } from './admin-delete-producer.dialog';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { provideHttpClient } from '@angular/common/http';

describe('AdminDeleteProducerDialogComponent', () => {
  let component: AdminDeleteProducerDialog;
  let fixture: ComponentFixture<AdminDeleteProducerDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDeleteProducerDialog],
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

    fixture = TestBed.createComponent(AdminDeleteProducerDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
