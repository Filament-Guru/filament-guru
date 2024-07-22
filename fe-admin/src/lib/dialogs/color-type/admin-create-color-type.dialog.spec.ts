import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminCreateColorTypeDialog } from './admin-create-color-type.dialog';

describe('AdminCreateColorTypeDialogComponent', () => {
  let component: AdminCreateColorTypeDialog;
  let fixture: ComponentFixture<AdminCreateColorTypeDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCreateColorTypeDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminCreateColorTypeDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
