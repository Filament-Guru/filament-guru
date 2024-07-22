import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminDeleteProducerDialog } from './admin-delete-producer.dialog';

describe('AdminDeleteProducerDialogComponent', () => {
  let component: AdminDeleteProducerDialog;
  let fixture: ComponentFixture<AdminDeleteProducerDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDeleteProducerDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminDeleteProducerDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
