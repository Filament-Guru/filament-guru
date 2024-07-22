import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminUpdateProducerDialog } from './admin-update-producer.dialog';

describe('AdminUpdateProducerDialogComponent', () => {
  let component: AdminUpdateProducerDialog;
  let fixture: ComponentFixture<AdminUpdateProducerDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUpdateProducerDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminUpdateProducerDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
