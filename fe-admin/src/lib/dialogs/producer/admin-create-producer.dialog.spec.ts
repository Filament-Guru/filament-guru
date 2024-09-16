import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminCreateProducerDialog } from './admin-create-producer.dialog';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { provideHttpClient } from '@angular/common/http';

describe('AdminCreateProducerDialog', () => {
  let component: AdminCreateProducerDialog;
  let fixture: ComponentFixture<AdminCreateProducerDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCreateProducerDialog],
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

    fixture = TestBed.createComponent(AdminCreateProducerDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
