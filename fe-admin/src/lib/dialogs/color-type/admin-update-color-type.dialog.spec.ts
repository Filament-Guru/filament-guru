import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminUpdateColorTypeDialog } from './admin-update-color-type.dialog';

describe('AdminUpdateColorTypeDialogComponent', () => {
  let component: AdminUpdateColorTypeDialog;
  let fixture: ComponentFixture<AdminUpdateColorTypeDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUpdateColorTypeDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminUpdateColorTypeDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
