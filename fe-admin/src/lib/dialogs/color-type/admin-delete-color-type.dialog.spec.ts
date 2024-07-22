import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminDeleteColorTypeDialog } from './admin-delete-color-type.dialog';

describe('AdminDeleteColorTypeDialogComponent', () => {
  let component: AdminDeleteColorTypeDialog;
  let fixture: ComponentFixture<AdminDeleteColorTypeDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDeleteColorTypeDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminDeleteColorTypeDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
